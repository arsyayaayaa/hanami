/**
 * ==================================================
 * Project Hanami
 * Component : Envelope
 * Description : Handle envelope visibility and opening.
 * Version : 2.0
 * ==================================================
 */

import eventBus from "../core/event-bus.js";

class Envelope {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.visible = false;
        this.opened = false;

    }

    /**
     * ------------------------------------------
     * Initialize
     * ------------------------------------------
     */

    init() {

        if (!this.element) return;

        this.bindEvents();

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.element.addEventListener(

            "click",

            () => this.open()

        );

    }

    /**
     * ------------------------------------------
     * Show Envelope
     * ------------------------------------------
     */

    show() {

        this.visible = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Hide Envelope
     * ------------------------------------------
     */

    hide() {

        this.visible = false;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Open Envelope
     * ------------------------------------------
     */

    open() {

        if (!this.visible) return;

        if (this.opened) return;

        this.opened = true;

        this.updateState();

        eventBus.emit("envelope:opened");

    }

    /**
     * ------------------------------------------
     * Close Envelope
     * ------------------------------------------
     */

    close() {

        if (!this.opened) return;

        this.opened = false;

        this.updateState();

        eventBus.emit("envelope:closed");

    }

    /**
     * ------------------------------------------
     * Is Visible
     * ------------------------------------------
     */

    isVisible() {

        return this.visible;

    }

    /**
     * ------------------------------------------
     * Is Open
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

        this.element.classList.toggle(
            "hidden",
            !this.visible
        );

        this.element.classList.toggle(
            "is-open",
            this.opened
        );

    }

}

export default Envelope;
