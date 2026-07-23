/**
 * ==================================================
 * Project : Hanami
 * Module  : Event Bus
 * Description : Simple publish / subscribe system.
 * Version : 1.0
 * ==================================================
 */

class EventBus {

    constructor() {

        this.events = new Map();

    }

    /**
     * ------------------------------------------
     * Subscribe
     * ------------------------------------------
     */

    on(eventName, callback) {

        if (!this.events.has(eventName)) {

            this.events.set(eventName, []);

        }

        this.events.get(eventName).push(callback);

    }

    /**
     * ------------------------------------------
     * Subscribe Once
     * ------------------------------------------
     */

    once(eventName, callback) {

        const wrapper = (payload) => {

            callback(payload);

            this.off(eventName, wrapper);

        };

        this.on(eventName, wrapper);

    }

    /**
     * ------------------------------------------
     * Unsubscribe
     * ------------------------------------------
     */

    off(eventName, callback) {

        if (!this.events.has(eventName)) return;

        const listeners = this.events
            .get(eventName)
            .filter(listener => listener !== callback);

        this.events.set(eventName, listeners);

    }

    /**
     * ------------------------------------------
     * Emit
     * ------------------------------------------
     */

    emit(eventName, payload = null) {

        if (!this.events.has(eventName)) return;

        this.events
            .get(eventName)
            .forEach(listener => {

                listener(payload);

            });

    }

    /**
     * ------------------------------------------
     * Remove All Listeners
     * ------------------------------------------
     */

    clear(eventName = null) {

        if (eventName) {

            this.events.delete(eventName);

            return;

        }

        this.events.clear();

    }

}

const eventBus = new EventBus();

export default eventBus;
