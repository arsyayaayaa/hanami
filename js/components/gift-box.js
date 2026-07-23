/**
 * ==================================================
 * Project Hanami
 * Component : Gift Box
 * Description : Handle Gift Box states and animations.
 * Version : 2.0
 * ==================================================
 */

import eventBus from "../core/event-bus.js";

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

        if (this.opened) return;

        this.opened = true;

        this.updateState();

        eventBus.emit("gift:opened");

    }

    /**
     * ------------------------------------------
     * Close Gift
     * ------------------------------------------
     */

    close() {

        if (!this.opened) return;

        this.opened = false;

        this.updateState();

        eventBus.emit("gift:closed");

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

}

export default GiftBox;
