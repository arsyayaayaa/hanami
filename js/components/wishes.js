/**
 * ==================================================
 * Project Hanami
 * Component : Wishes
 * Description : Handle wishes input and validation.
 * Version : 1.0
 * ==================================================
 */

import WISHES from "../data/wishes-data.js";

class Wishes {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.title = this.element?.querySelector(".wishes-title");

        this.description = this.element?.querySelector(".wishes-description");

        this.input = this.element?.querySelector(".wishes-input");

        this.counter = this.element?.querySelector(".wishes-counter");

        this.submitButton = this.element?.querySelector(".wishes-submit");

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
     * Render Configuration
     * ------------------------------------------
     */

    render() {

        this.title.textContent = WISHES.title;

        this.description.textContent = WISHES.description;

        this.input.placeholder = WISHES.placeholder;

        this.input.maxLength = WISHES.maxLength;

        this.submitButton.textContent = WISHES.submitText;

        this.updateCounter();

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.input.addEventListener(

            "input",

            () => this.updateCounter()

        );

        this.submitButton.addEventListener(

            "click",

            () => this.submit()

        );

    }

    /**
     * ------------------------------------------
     * Update Character Counter
     * ------------------------------------------
     */

    updateCounter() {

        const length = this.input.value.length;

        this.counter.textContent =
            `${length} / ${WISHES.maxLength}`;

    }

    /**
     * ------------------------------------------
     * Submit Wish
     * ------------------------------------------
     */

    submit() {

        const message = this.input.value.trim();

        if (!this.validate(message)) {

            return;

        }

        /**
         * Firebase
         * (Phase 10)
         */

        console.log("Wish:", message);

        this.complete();

    }

    /**
     * ------------------------------------------
     * Validation
     * ------------------------------------------
     */

    validate(message) {

        if (message.length === 0) {

            alert(WISHES.emptyMessage);

            return false;

        }

        if (message.length < WISHES.minLength) {

            alert(WISHES.tooShortMessage);

            return false;

        }

        if (message.length > WISHES.maxLength) {

            alert(WISHES.tooLongMessage);

            return false;

        }

        return true;

    }

    /**
     * ------------------------------------------
     * Complete
     * ------------------------------------------
     */

    complete() {

        this.emit("wishes:completed");

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

export default Wishes;
