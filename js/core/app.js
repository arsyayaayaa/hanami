/**
 * ==================================================
 * Project : Hanami
 * Module  : Application Core
 * Description : Bootstrap Hanami application.
 * Version : 1.0
 * ==================================================
 */

import sceneManager from "./scene-manager.js";

// Components
import Gift from "../components/gift.js";
import Keypad from "../components/keypad.js";
import Envelope from "../components/envelope.js";
import Letter from "../components/letter.js";
import Gallery from "../components/gallery.js";
import Timeline from "../components/timeline.js";
import Wishes from "../components/wishes.js";
import Celebration from "../components/celebration.js";
import Ending from "../components/ending.js";

class App {

    constructor() {

        this.components = {};

    }

    /**
     * ------------------------------------------
     * Initialize Application
     * ------------------------------------------
     */

    init() {

        this.createComponents();

        this.registerScenes();

        this.start();

    }

    /**
     * ------------------------------------------
     * Create Components
     * ------------------------------------------
     */

    createComponents() {

        this.components.gift = new Gift({
            element: "#scene-gift"
        });

        this.components.keypad = new Keypad({
            element: "#scene-keypad"
        });

        this.components.envelope = new Envelope({
            element: "#scene-envelope"
        });

        this.components.letter = new Letter({
            element: "#scene-letter"
        });

        this.components.gallery = new Gallery({
            element: "#scene-gallery"
        });

        this.components.timeline = new Timeline({
            element: "#scene-timeline"
        });

        this.components.wishes = new Wishes({
            element: "#scene-wishes"
        });

        this.components.celebration = new Celebration({
            element: "#scene-celebration"
        });

        this.components.ending = new Ending({
            element: "#scene-ending"
        });

        Object.values(this.components).forEach(component => {

            component.init();

        });

    }

    /**
     * ------------------------------------------
     * Register Scene
     * ------------------------------------------
     */

    registerScenes() {

        Object.entries(this.components).forEach(([name, component]) => {

            sceneManager.register(name, component);

        });

    }

    /**
     * ------------------------------------------
     * Start Application
     * ------------------------------------------
     */

    start() {

        sceneManager.start("gift");

    }

}

const app = new App();

export default app;
