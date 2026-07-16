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
import Envelope from "../components/envelope.js";
import Letter from "../components/letter.js";
import Gallery from "../components/gallery.js";
import Timeline from "../components/timeline.js";

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

            maxLength: 6,

            onSubmit: (code) => this.validateCode(code)

        });

        this.envelope = new Envelope({

            element: "#gift-envelope"

        });

        this.letter = new Letter({

            element: "#birthday-letter"

        });
        this.gallery = new Gallery({
            element: "#scene-gallery"
        });
        this.timeline = new Timeline({
            element: "#scene-timeline"
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
        this.letter.init();
        this.bindEvents();
        this.gallery.init();
        this.timeline.init();

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

            () => this.envelope.show()

        );

        this.envelope.element.addEventListener(

            "envelope:opened",

            () => this.letter.show()

        );

        this.letter.element.addEventListener(

            "letter:continue",

            () => this.nextScene()

        );
        this.letter.element.addEventListener(
            "letter:continue",
            ()=>{
                this.showGallery();
            }
        );
        this.gallery.element.addEventListener(
            "gallery:completed",
            ()=>{
                this.nextScene();
            }
        );
        this.gallery.element.addEventListener(
            "gallery:completed",
            ()=>{
                this.showTimeline();
            }
        );
        this.timeline.element.addEventListener(
            "timeline:completed",
            ()=>{
                this.nextScene();
            }
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
     * Next Scene
     * ------------------------------------------
     */

    nextScene() {

        /**
         * Scene Manager
         * (Phase 6)
         */
        console.log("Next Scene");
    }
    /**
    * ------------------------------------------
    * Show Gallery
    * ------------------------------------------
    */
    showGallery(){
        this.letter.hide();
        this.gallery.show();
    }
    nextScene(){
        console.log("Timeline Scene");
    }
    showTimeline(){
        this.gallery.hide();
        this.timeline.show();
    }
    nextScene(){
    console.log("Wishes Scene");
    }
    nextScene(){
    console.log("Wishes Scene");
    }
    /*** ------------------------------------------
    * Show Timeline
    * ------------------------------------------*/
    showTimeline(){
        this.gallery.hide();
        this.timeline.show();
    }
}

export default GiftScene;
