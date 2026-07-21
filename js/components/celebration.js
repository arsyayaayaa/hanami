/**
 * ==================================================
 * Project Hanami
 * Component : Celebration
 * Description : Handle celebration scene.
 * Version : 1.0
 * ==================================================
 */

import CELEBRATION from "../data/celebration-data.js";

class Celebration {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor(options = {}) {

        this.element = document.querySelector(options.element);

        this.title = this.element?.querySelector(".celebration-title");

        this.name = this.element?.querySelector(".celebration-name");

        this.message = this.element?.querySelector(".celebration-message");

        this.button = this.element?.querySelector(".celebration-button");

        this.confettiLayer = this.element?.querySelector(".celebration-confetti");

        this.balloonLayer = this.element?.querySelector(".celebration-balloons");

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

        this.title.textContent = CELEBRATION.title;

        this.name.textContent = CELEBRATION.recipient;

        this.message.textContent = CELEBRATION.message;

        this.button.textContent = CELEBRATION.buttonText;

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.button.addEventListener(

            "click",

            () => this.complete()

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

        this.play();

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
     * Play Celebration
     * ------------------------------------------
     */

    play() {

        if (CELEBRATION.animation.confetti) {

            this.startConfetti();

        }

        if (CELEBRATION.animation.balloons) {

            this.startBalloons();

        }

        if (CELEBRATION.audio.enabled) {

            this.playMusic();

        }

    }

    /**
     * ------------------------------------------
     * Confetti
     * ------------------------------------------
     */

    startConfetti() {

        console.log("Start Confetti");

    }

    /**
     * ------------------------------------------
     * Balloons
     * ------------------------------------------
     */

    startBalloons() {

        console.log("Start Balloons");

    }

    /**
     * ------------------------------------------
     * Music
     * ------------------------------------------
     */

    playMusic() {

        console.log("Play Music");

    }

    /**
     * ------------------------------------------
     * Complete
     * ------------------------------------------
     */

    complete() {

        this.emit("celebration:completed");

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

export default Celebration;
