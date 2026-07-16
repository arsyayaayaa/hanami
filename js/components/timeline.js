/**
 * ==================================================
 * Project Hanami
 * Component : Timeline
 * Description : Render and manage journey timeline.
 * Version : 1.0
 * ==================================================
 */

import TIMELINE from "../data/timeline-data.js";

class Timeline {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.visible = false;

        this.observer = null;

    }

    /**
     * ------------------------------------------
     * Initialize
     * ------------------------------------------
     */

    init() {

        if (!this.element) return;

        this.render();

        this.updateState();

        this.createObserver();

    }

    /**
     * ------------------------------------------
     * Render Timeline
     * ------------------------------------------
     */

    render() {

        this.element.innerHTML = "";

        TIMELINE.forEach(memory => {

            const item = document.createElement("article");

            item.className = "timeline-item";

            item.innerHTML = `
            
                <div class="timeline-marker"></div>

                <div class="timeline-card">

                    <span class="timeline-date">

                        ${memory.date}

                    </span>

                    <h3 class="timeline-title">

                        ${memory.title}

                    </h3>

                    <p class="timeline-description">

                        ${memory.description}

                    </p>

                </div>

            `;

            this.element.appendChild(item);

        });

    }

    /**
     * ------------------------------------------
     * Show Timeline
     * ------------------------------------------
     */

    show() {

        this.visible = true;

        this.updateState();

    }

    /**
     * ------------------------------------------
     * Hide Timeline
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
     * Create Intersection Observer
     * ------------------------------------------
     */

    createObserver() {

        this.observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(

                        "is-visible"

                    );

                    entry.target.classList.add(

                        "is-active"

                    );

                });

            },

            {

                threshold: .35

            }

        );

        this.observeItems();

    }

    /**
     * ------------------------------------------
     * Observe Timeline Items
     * ------------------------------------------
     */

    observeItems() {

        const items = this.element.querySelectorAll(

            ".timeline-item"

        );

        items.forEach(item => {

            this.observer.observe(item);

        });

    }

    /**
     * ------------------------------------------
     * Complete Timeline
     * ------------------------------------------
     */

    complete() {

        this.emit(

            "timeline:completed"

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

export default Timeline;
