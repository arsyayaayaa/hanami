/**
 * ==================================================
 * Project : Hanami
 * Module  : Scene Manager
 * Description : Manage application scenes.
 * Version : 1.0
 * ==================================================
 */

class SceneManager {

    constructor() {

        this.scenes = new Map();

        this.order = [];

        this.currentScene = null;

        this.currentIndex = -1;

    }

    /**
     * ------------------------------------------
     * Register Scene
     * ------------------------------------------
     */

    register(name, component) {

        if (this.scenes.has(name)) {

            console.warn(`Scene "${name}" already exists.`);

            return;

        }

        this.scenes.set(name, component);

        this.order.push(name);

    }

    /**
     * ------------------------------------------
     * Start
     * ------------------------------------------
     */

    start(name) {

        this.goTo(name);

    }

    /**
     * ------------------------------------------
     * Go To Scene
     * ------------------------------------------
     */

    goTo(name) {

        const nextScene = this.scenes.get(name);

        if (!nextScene) {

            console.warn(`Scene "${name}" not found.`);

            return;

        }

        if (this.currentScene) {

            this.currentScene.hide();

        }

        nextScene.show();

        this.currentScene = nextScene;

        this.currentIndex = this.order.indexOf(name);

    }

    /**
     * ------------------------------------------
     * Next Scene
     * ------------------------------------------
     */

    next() {

        const nextIndex = this.currentIndex + 1;

        if (nextIndex >= this.order.length) return;

        this.goTo(this.order[nextIndex]);

    }

    /**
     * ------------------------------------------
     * Previous Scene
     * ------------------------------------------
     */

    previous() {

        const previousIndex = this.currentIndex - 1;

        if (previousIndex < 0) return;

        this.goTo(this.order[previousIndex]);

    }

    /**
     * ------------------------------------------
     * Current Scene
     * ------------------------------------------
     */

    getCurrentScene() {

        return this.currentScene;

    }

    /**
     * ------------------------------------------
     * Current Scene Name
     * ------------------------------------------
     */

    getCurrentSceneName() {

        return this.order[this.currentIndex] ?? null;

    }

    /**
     * ------------------------------------------
     * Reset
     * ------------------------------------------
     */

    reset() {

        if (this.currentScene) {

            this.currentScene.hide();

        }

        this.currentScene = null;

        this.currentIndex = -1;

    }

}

const sceneManager = new SceneManager();

export default sceneManager;
