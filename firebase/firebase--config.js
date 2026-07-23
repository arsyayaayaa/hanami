/**
 * ==================================================
 * Project : Hanami
 * Module  : Firebase Configuration
 * Description : Initialize Firebase Application.
 * Version : 1.0
 * ==================================================
 */

import { initializeApp } from "firebase/app";

/**
 * ------------------------------------------
 * Firebase Configuration
 * ------------------------------------------
 *
 * Replace with your own Firebase project
 * credentials.
 */

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

};

/**
 * ------------------------------------------
 * Firebase App
 * ------------------------------------------
 */

const firebaseApp = initializeApp(

    firebaseConfig

);

export default firebaseApp;
