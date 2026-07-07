/**
 * ==================================================
 * Project Hanami
 * Scene : Gift
 * Description : Handle Gift Scene Flow
 * Version : 1.0
 * ==================================================
 */

import CONFIG from "../config/config.js";

import GiftBox from "../components/gift-box.js";
import Keypad from "../components/keypad.js";

class GiftScene {

    /**
     * ------------------------------------------
     * Constructor
     * ------------------------------------------
     */

    constructor() {

        this.scene = document.querySelector("#scene-gift");

        this.giftLock = document.querySelector("#gift-lock");

        this.envelope = document.querySelector("#gift-envelope");

        this.giftBox = new GiftBox({

            element: "#gift-box"

        });

        this.keypad = new Keypad({

            container: "#gift-lock .keypad",

            display: "#gift-lock .pin-display",

            message: "#gift-lock .keypad-message",

            maxLength: 6,

            onSubmit: (code) => this.validateCode(code)

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

        this.giftBox.element.addEventListener(

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

        if (!this.envelope) return;

        this.envelope.classList.remove("hidden");

    }

}

export default GiftScene;
