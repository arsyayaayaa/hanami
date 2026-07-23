/**
 * ==================================================
 * Project Hanami
 * Component : Wishes
 * Description : Handle wishes input and validation.
 * Version : 2.0
 * ==================================================
 */

import WISHES from "../data/wishes-data.js";
import eventBus from "../core/event-bus.js";

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

        if (this.title) {

            this.title.textContent = WISHES.title;

        }

        if (this.description) {

            this.description.textContent = WISHES.description;

        }

        if (this.input) {

            this.input.placeholder = WISHES.placeholder;

            this.input.maxLength = WISHES.maxLength;

        }

        if (this.submitButton) {

            this.submitButton.textContent = WISHES.submitText;

        }

        this.updateCounter();

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.input?.addEventListener(

            "input",

            () => this.updateCounter()

        );

        this.submitButton?.addEventListener(

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

        if (!this.counter || !this.input) return;

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

        if (!this.input) return;

        const message = this.input.value.trim();

        if (!this.validate(message)) {

            return;

        }

        /**
         * ------------------------------------------
         * Firebase
         * (Phase 11)
         * ------------------------------------------
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

        eventBus.emit(

            "wishes:submitted"

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

export default Wishes;
