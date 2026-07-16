/**
 * ==================================================
 * Project Hanami
 * Component : Gallery
 * Description : Handle memory gallery rendering
 *               and navigation.
 * Version : 1.0
 * ==================================================
 */

import GALLERY from "../data/gallery-data.js";

class Gallery {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.card = this.element?.querySelector(".gallery-card");

        this.image = this.element?.querySelector(".gallery-image img");

        this.title = this.element?.querySelector(".gallery-title");

        this.caption = this.element?.querySelector(".gallery-caption");

        this.counter = this.element?.querySelector(".gallery-counter");

        this.previousButton = this.element?.querySelector(".gallery-prev");

        this.nextButton = this.element?.querySelector(".gallery-next");

        this.currentIndex = 0;

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

        this.previousButton?.addEventListener(

            "click",

            () => this.previous()

        );

        this.nextButton?.addEventListener(

            "click",

            () => this.next()

        );

    }

    /**
     * ------------------------------------------
     * Render Current Memory
     * ------------------------------------------
     */

    render() {

        const memory = GALLERY[this.currentIndex];

        if (!memory) return;

        if (this.image) {

            this.image.src = memory.image;

            this.image.alt = memory.alt;

        }

        if (this.title) {

            this.title.textContent = memory.title;

        }

        if (this.caption) {

            this.caption.textContent = memory.caption;

        }

        if (this.counter) {

            this.counter.textContent =
                `${this.currentIndex + 1} / ${GALLERY.length}`;

        }

    }

    /**
     * ------------------------------------------
     * Previous Memory
     * ------------------------------------------
     */

    previous() {

        if (this.currentIndex === 0) return;

        this.currentIndex--;

        this.animate();

        this.render();

    }

    /**
     * ------------------------------------------
     * Next Memory
     * ------------------------------------------
     */

    next() {

        if (this.currentIndex >= GALLERY.length - 1) {

            this.emit("gallery:completed");

            return;

        }

        this.currentIndex++;

        this.animate();

        this.render();

    }

    /**
     * ------------------------------------------
     * Show Gallery
     * ------------------------------------------
     */

    show() {

        this.visible = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Hide Gallery
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

    /**
     * ------------------------------------------
     * Play Card Animation
     * ------------------------------------------
     */

    animate() {

        if (!this.card) return;

        this.card.classList.remove("is-changing");

        void this.card.offsetWidth;

        this.card.classList.add("is-changing");

    }

    /**
     * ------------------------------------------
     * Emit Event
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

export default Gallery;
