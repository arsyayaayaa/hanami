/**
 * ==================================================
 * Project Hanami
 * Configuration
 * Description : Global configuration for Hanami.
 * Version : 1.0
 * ==================================================
 */

const CONFIG = {

    /**
     * ------------------------------------------
     * Recipient Information
     * ------------------------------------------
     */

    recipient: {

        name: "Happy Birthday",

        nickname: "",

    },

    /**
     * ------------------------------------------
     * Gift Lock
     * ------------------------------------------
     */

    giftCode: "021124",

    /**
     * ------------------------------------------
     * Music
     * ------------------------------------------
     */

    music: {

        src: "assets/audio/hanami.mp3",

        volume: 0.5,

        loop: true,

        autoplay: false,

    },

    /**
     * ------------------------------------------
     * Animation
     * ------------------------------------------
     */

    animation: {

        duration: 800,

        transition: 600,

    },

    /**
     * ------------------------------------------
     * Gallery
     * ------------------------------------------
     */

    gallery: [

        "assets/images/gallery/photo-1.jpg",
        "assets/images/gallery/photo-2.jpg",
        "assets/images/gallery/photo-3.jpg",
        "assets/images/gallery/photo-4.jpg"

    ],

    /**
     * ------------------------------------------
     * Timeline
     * ------------------------------------------
     */

    timeline: [

        {
            date: "",
            title: "",
            description: ""
        }

    ],

    /**
     * ------------------------------------------
     * Wishes
     * ------------------------------------------
     */

    wishes: [

        "Happy Birthday."

    ]

};

export default CONFIG;
