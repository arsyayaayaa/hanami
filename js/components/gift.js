/**
 * ==================================================
 * Project Hanami
 * Scene : Gift
 * Description : Handle Gift Scene Flow
 * Version : 2.0
 * ==================================================
 */

import CONFIG from "../config/config.js";

import eventBus from "../core/event-bus.js";

import GiftBox from "../components/gift-box.js";
import Keypad from "../components/keypad.js";
import Envelope from "../components/envelope.js";

class GiftScene {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor() {

        this.scene = document.querySelector("#scene-gift");

        this.giftLock = document.querySelector("#gift-lock");

        this.giftBox = new GiftBox({

            element: "#gift-box"

        });

        this.keypad = new Keypad({

            container: "#gift-lock .keypad",

            display: "#gift-lock .pin-display",

            message: "#gift-lock .keypad-message",

            maxLength: 6

        });

        this.envelope = new Envelope({

            element: "#gift-envelope"

        });

    }

    /**
     * ------------------------------------------
     * Initialize
     * ------------------------------------------
     */

    init() {

        this.giftBox.init();

        this.keypad.init();

        this.envelope.init();

        this.bindEvents();

    }

    /**
     * ------------------------------------------
     * Register Events
     * ------------------------------------------
     */

    bindEvents() {

        this.giftBox.element.addEventListener(

            "click",

            () => this.showKeypad()

        );

        eventBus.on(

            "keypad:submit",

            ({ code }) => this.validateCode(code)

        );

        eventBus.on(

            "gift:opened",

            () => this.showEnvelope()

        );

    }

    /**
     * ------------------------------------------
     * Show Keypad
     * ------------------------------------------
     */

    showKeypad() {

        this.giftLock.classList.remove("hidden");

    }

    /**
     * ------------------------------------------
     * Hide Keypad
     * ------------------------------------------
     */

    hideKeypad() {

        this.giftLock.classList.add("hidden");

    }

    /**
     * ------------------------------------------
     * Validate Password
     * ------------------------------------------
     */

    validateCode(code) {

        if (code !== CONFIG.giftCode) {

            this.showError();

            return;

        }

        this.unlockGift();

    }

    /**
     * ------------------------------------------
     * Unlock Gift
     * ------------------------------------------
     */

    unlockGift() {

        this.hideKeypad();

        this.giftBox.unlock();

        this.giftBox.open();

    }

    /**
     * ------------------------------------------
     * Wrong Password
     * ------------------------------------------
     */

    showError() {

        this.keypad.showMessage(

            "Hmm... that doesn't seem right."

        );

        this.keypad.clear();

    }

    /**
     * ------------------------------------------
     * Show Envelope
     * ------------------------------------------
     */

    showEnvelope() {

        this.envelope.show();

    }

}

export default GiftScene;
