/**
 * ==================================================
 * Project Hanami
 * Component : Ending
 * Description : Handle ending scene.
 * Version : 1.0
 * ==================================================
 */

import ENDING from "../data/ending-data.js";

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

        this.title.textContent = ENDING.title;

        this.message.textContent = ENDING.message;

        this.quote.textContent = ENDING.quote;

        this.button.textContent = ENDING.buttonText;

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.button.addEventListener(

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

        this.emit("ending:replay");

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

        this.element.classList.toggle(

            "is-visible",

            this.visible

        );

    }

    /**
     * ------------------------------------------
     * Emit Event
     * ------------------------------------------
     */

    emit(name) {

        this.element.dispatchEvent(

            new CustomEvent(name, {

                bubbles: true

            })

        );

    }

}

export default Ending;
