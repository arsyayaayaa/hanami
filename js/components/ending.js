/**
 * ==================================================
 * Project Hanami
 * Component : Ending
 * Description : Handle ending scene.
 * Version : 2.0
 * ==================================================
 */

import ENDING from "../data/ending-data.js";
import eventBus from "../core/event-bus.js";

class Ending {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.title = this.element?.querySelector(".ending-title");

        this.message = this.element?.querySelector(".ending-message");

        this.quote = this.element?.querySelector(".ending-quote");

        this.button = this.element?.querySelector(".ending-button");

        this.visible = false;

    }

    /**
     * ------------------------------------------
     * Initialize
     * ------------------------------------------
     */

    init() {

        if (!this.element) return;

        this.render();

        this.bindEvents();

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Render Content
     * ------------------------------------------
     */

    render() {

        if (this.title) {

            this.title.textContent = ENDING.title;

        }

        if (this.message) {

            this.message.textContent = ENDING.message;

        }

        if (this.quote) {

            this.quote.textContent = ENDING.quote;

        }

        if (this.button) {

            this.button.textContent = ENDING.buttonText;

        }

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.button?.addEventListener(

            "click",

            () => this.replay()

        );

    }

    /**
     * ------------------------------------------
     * Replay
     * ------------------------------------------
     */

    replay() {

        eventBus.emit(

            "ending:replay"

        );

    }

    /**
     * ------------------------------------------
     * Show
     * ------------------------------------------
     */

    show() {

        this.visible = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Hide
     * ------------------------------------------
     */

    hide() {

        this.visible = false;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Update State
     * ------------------------------------------
     */

    updateState() {

        if (!this.element) return;

        this.element.classList.toggle(

            "is-visible",

            this.visible

        );

    }

}

export default Ending;
