/**
 * ==================================================
 * Project : Hanami
 * Module  : Application Core
 * Description : Bootstrap Hanami application.
 * Version : 2.0
 * ==================================================
 */

import sceneManager from "./scene-manager.js";
import storyController from "./story-controller.js";

// Scenes
import GiftScene from "../scenes/gift.js";

// Components
import Letter from "../components/letter.js";
import Gallery from "../components/gallery.js";
import Timeline from "../components/timeline.js";
import Wishes from "../components/wishes.js";
import Celebration from "../components/celebration.js";
import Ending from "../components/ending.js";

class App {

    constructor() {

        this.scenes = {};

    }

    /**
     * ------------------------------------------
     * Initialize Application
     * ------------------------------------------
     */

    init() {

        this.createScenes();

        this.registerScenes();

        storyController.init();

        this.start();

    }

    /**
     * ------------------------------------------
     * Create Scenes
     * ------------------------------------------
     */

    createScenes() {

        this.scenes.gift = new GiftScene();

        this.scenes.letter = new Letter({

            element: "#scene-letter"

        });

        this.scenes.gallery = new Gallery({

            element: "#scene-gallery"

        });

        this.scenes.timeline = new Timeline({

            element: "#scene-timeline"

        });

        this.scenes.wishes = new Wishes({

            element: "#scene-wishes"

        });

        this.scenes.celebration = new Celebration({

            element: "#scene-celebration"

        });

        this.scenes.ending = new Ending({

            element: "#scene-ending"

        });

        Object.values(this.scenes).forEach(scene => {

            scene.init();

        });

    }

    /**
     * ------------------------------------------
     * Register Scenes
     * ------------------------------------------
     */

    registerScenes() {

        Object.entries(this.scenes).forEach(

            ([name, scene]) => {

                sceneManager.register(

                    name,

                    scene

                );

            }

        );

    }

    /**
     * ------------------------------------------
     * Start
     * ------------------------------------------
     */

    start() {

        sceneManager.start("gift");

    }

}

const app = new App();

export default app;
