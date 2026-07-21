/**
 * ==================================================
 * Project Hanami
 * Data : Celebration
 * Description : Celebration scene configuration.
 * Version : 1.0
 * ==================================================
 */

const CELEBRATION = {

    /**
     * ------------------------------------------
     * Hero Content
     * ------------------------------------------
     */

    title: "Happy Birthday! 🎂",

    recipient: "For Someone Special 🌸",

    message:
        "May today bring you endless happiness, beautiful memories, and the courage to chase every dream. Thank you for being part of this story.",

    /**
     * ------------------------------------------
     * Button
     * ------------------------------------------
     */

    buttonText: "Continue",

    /**
     * ------------------------------------------
     * Animation
     * ------------------------------------------
     */

    animation: {

        confetti: true,

        balloons: true,

        backgroundGlow: true,

        duration: 5000

    },

    /**
     * ------------------------------------------
     * Audio
     * ------------------------------------------
     */

    audio: {

        enabled: true,

        volume: 0.5,

        loop: true

    }

};

export default CELEBRATION;
