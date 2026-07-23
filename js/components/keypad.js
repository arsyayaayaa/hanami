/**
 * ==================================================
 * Project Hanami
 * Component : Keypad
 * Description : Handle keypad input and PIN display.
 * Version : 2.0
 * ==================================================
 */

import eventBus from "../core/event-bus.js";

class Keypad {

    constructor(options = {}) {

        this.container = document.querySelector(options.container);
        this.display = document.querySelector(options.display);
        this.message = document.querySelector(options.message);

        this.maxLength = options.maxLength ?? 6;

        this.digits = [];

    }

    /**
     * ------------------------------------------
     * Initialize Component
     * ------------------------------------------
     */

    init() {

        if (!this.container) return;

        this.bindEvents();

        this.updateDisplay();

    }

    /**
     * ------------------------------------------
     * Register Button Events
     * ------------------------------------------
     */

    bindEvents() {

        const buttons = this.container.querySelectorAll(".key");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const value = button.textContent.trim();

                switch (value) {

                    case "⌫":
                        this.removeDigit();
                        break;

                    case "✓":
                        this.submit();
                        break;

                    default:
                        this.addDigit(value);
                        break;

                }

            });

        });

    }

    /**
     * ------------------------------------------
     * Add Digit
     * ------------------------------------------
     */

    addDigit(number) {

        if (!/^\d$/.test(number)) return;

        if (this.digits.length >= this.maxLength) return;

        this.digits.push(number);

        this.updateDisplay();

        this.showMessage("");

    }

    /**
     * ------------------------------------------
     * Remove Last Digit
     * ------------------------------------------
     */

    removeDigit() {

        if (this.digits.length === 0) return;

        this.digits.pop();

        this.updateDisplay();

    }

    /**
     * ------------------------------------------
     * Update PIN Indicator
     * ------------------------------------------
     */

    updateDisplay() {

        if (!this.display) return;

        const dots = this.display.querySelectorAll(".pin-dot");

        dots.forEach((dot, index) => {

            dot.classList.toggle("active", index < this.digits.length);

        });

    }

    /**
     * ------------------------------------------
     * Clear PIN
     * ------------------------------------------
     */

    clear() {

        this.digits = [];

        this.updateDisplay();

    }

    /**
     * ------------------------------------------
     * Submit PIN
     * ------------------------------------------
     */

    submit() {

        if (this.digits.length !== this.maxLength) {

            this.showMessage("Please enter all 6 digits.");

            return;

        }

        eventBus.emit("keypad:submit", {

            code: this.getValue()

        });

    }

    /**
     * ------------------------------------------
     * Show Message
     * ------------------------------------------
     */

    showMessage(text = "") {

        if (!this.message) return;

        this.message.textContent = text;

    }

    /**
     * ------------------------------------------
     * Get Current PIN
     * ------------------------------------------
     */

    getValue() {

        return this.digits.join("");

    }

}

export default Keypad;
