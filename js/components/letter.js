/**
 * ==================================================
 * Project Hanami
 * Component : Letter
 * Description : Handle birthday letter rendering
 *               and interaction.
 * Version : 1.0
 * ==================================================
 */

import LETTER from "../data/letter-data.js";

class Letter {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.title = this.element?.querySelector(".letter-title");

        this.date = this.element?.querySelector(".letter-date");

        this.body = this.element?.querySelector(".letter-body");

        this.signature = this.element?.querySelector(".signature-name");

        this.closing = this.element?.querySelector(".letter-closing");

        this.button = this.element?.querySelector(".letter-next");

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
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        if (!this.button) return;

        this.button.addEventListener(

            "click",

            () => this.next()

        );

    }

    /**
     * ------------------------------------------
     * Render Letter
     * ------------------------------------------
     */

    render() {

        if (this.title) {

            this.title.textContent = LETTER.title;

        }

        if (this.date) {

            this.date.textContent = LETTER.date;

        }

        if (this.body) {

            this.body.innerHTML = "";

            LETTER.paragraphs.forEach(text => {

                const paragraph = document.createElement("p");

                paragraph.textContent = text;

                this.body.appendChild(paragraph);

            });

        }

        if (this.closing) {

            this.closing.textContent = LETTER.closing;

        }

        if (this.signature) {

            this.signature.textContent = LETTER.signature;

        }

        if (this.button) {

            this.button.textContent = LETTER.button.text;

        }

    }

    /**
     * ------------------------------------------
     * Show Letter
     * ------------------------------------------
     */

    show() {

        this.visible = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Hide Letter
     * ------------------------------------------
     */

    hide() {

        this.visible = false;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Update CSS State
     * ------------------------------------------
     */

    updateState() {

        if (!this.element) return;

        this.element.classList.toggle(

            "is-visible",

            this.visible

        );

    }

    /**
     * ------------------------------------------
     * Continue
     * ------------------------------------------
     */

    next() {

        this.emit("letter:continue");

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

export default Letter;
