/**
 * ==================================================
 * Project : Hanami
 * Module  : Firestore
 * Description : Create Firestore instance.
 * Version : 1.0
 * ==================================================
 */

import { getFirestore } from "firebase/firestore";

import firebaseApp from "./firebase-config.js";

/**
 * ------------------------------------------
 * Firestore Database
 * ------------------------------------------
 */

const db = getFirestore(

    firebaseApp

);

export default db;
