/**
 * ==================================================
 * Project Hanami
 * Data : Wishes
 * Description : Wishes component configuration.
 * Version : 1.0
 * ==================================================
 */

const WISHES = {

    /**
     * ------------------------------------------
     * Content
     * ------------------------------------------
     */

    title: "Leave a Wish 🌸",

    description:
        "Every kind word becomes part of this memory.",

    placeholder:
        "Write your wish here...",

    /**
     * ------------------------------------------
     * Validation
     * ------------------------------------------
     */

    minLength: 3,

    maxLength: 300,

    /**
     * ------------------------------------------
     * Button
     * ------------------------------------------
     */

    submitText: "Send Wish",

    /**
     * ------------------------------------------
     * Messages
     * ------------------------------------------
     */

    successMessage:
        "Thank you for your beautiful wish! 🌸",

    emptyMessage:
        "Please write something first.",

    tooShortMessage:
        "Your wish is a little too short.",

    tooLongMessage:
        "Your wish exceeds the maximum length."

};

export default WISHES;
