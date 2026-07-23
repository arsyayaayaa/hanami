/**
 * ==================================================
 * Project : Hanami
 * Module  : Story Controller
 * Description : Handle story flow between scenes.
 * Version : 1.0
 * ==================================================
 */

import eventBus from "./event-bus.js";
import sceneManager from "./scene-manager.js";

class StoryController {

    /**
     * ------------------------------------------
     * Initialize
     * ------------------------------------------
     */

    init() {

        this.bindEvents();

    }

    /**
     * ------------------------------------------
     * Register Story Events
     * ------------------------------------------
     */

    bindEvents() {

        /**
         * Gift
         */

        eventBus.on(

            "gift:opened",

            () => {

                sceneManager.goTo("letter");

            }

        );

        /**
         * Letter
         */

        eventBus.on(

            "letter:continue",

            () => {

                sceneManager.goTo("gallery");

            }

        );

        /**
         * Gallery
         */

        eventBus.on(

            "gallery:continue",

            () => {

                sceneManager.goTo("timeline");

            }

        );

        /**
         * Timeline
         */

        eventBus.on(

            "timeline:continue",

            () => {

                sceneManager.goTo("wishes");

            }

        );

        /**
         * Wishes
         */

        eventBus.on(

            "wishes:submitted",

            () => {

                sceneManager.goTo("celebration");

            }

        );

        /**
         * Celebration
         */

        eventBus.on(

            "celebration:continue",

            () => {

                sceneManager.goTo("ending");

            }

        );

        /**
         * Replay
         */

        eventBus.on(

            "ending:replay",

            () => {

                sceneManager.goTo("gift");

            }

        );

    }

}

const storyController = new StoryController();

export default storyController;
