/**
 * ==================================================
 * Project Hanami
 * Component : Gift Box
 * Description : Handle Gift Box states and animations.
 * Version : 1.0
 * ==================================================
 */

class GiftBox {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.glow = this.element?.querySelector(".gift-glow");
        this.lid = this.element?.querySelector(".gift-lid");
        this.body = this.element?.querySelector(".gift-body");

        this.locked = true;
        this.opened = false;

    }

    /**
     * ------------------------------------------
     * Initialize Component
     * ------------------------------------------
     */

    init() {

        if (!this.element) return;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Lock Gift
     * ------------------------------------------
     */

    lock() {

        this.locked = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Unlock Gift
     * ------------------------------------------
     */

    unlock() {

        this.locked = false;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Open Gift
     * ------------------------------------------
     */

    open() {

        if (this.locked) return;

        this.opened = true;

        this.updateState();

        this.emit("gift:opened");

    }

    /**
     * ------------------------------------------
     * Close Gift
     * ------------------------------------------
     */

    close() {

        this.opened = false;

        this.updateState();

        this.emit("gift:closed");

    }

    /**
     * ------------------------------------------
     * Get Lock State
     * ------------------------------------------
     */

    isLocked() {

        return this.locked;

    }

    /**
     * ------------------------------------------
     * Get Open State
     * ------------------------------------------
     */

    isOpen() {

        return this.opened;

    }

    /**
     * ------------------------------------------
     * Update CSS State
     * ------------------------------------------
     */

    updateState() {

        if (!this.element) return;

        this.element.classList.toggle("is-locked", this.locked);

        this.element.classList.toggle("is-unlocked", !this.locked);

        this.element.classList.toggle("is-open", this.opened);

    }

    /**
     * ------------------------------------------
     * Emit Custom Event
     * ------------------------------------------
     */

    emit(name) {

        if (!this.element) return;

        this.element.dispatchEvent(

            new CustomEvent(name, {

                bubbles: true

            })

        );

    }

}

export default GiftBox;
