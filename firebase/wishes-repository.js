/**
 * ==================================================
 * Project : Hanami
 * Module  : Wishes Repository
 * Description : Handle wishes database operations.
 * Version : 1.0
 * ==================================================
 */

import {

    addDoc,

    collection,

    getDocs,

    orderBy,

    query,

    serverTimestamp

} from "firebase/firestore";

import db from "./firestore.js";

/**
 * ------------------------------------------
 * Collection
 * ------------------------------------------
 */

const COLLECTION_NAME = "wishes";

/**
 * ==================================================
 * Wishes Repository
 * ==================================================
 */

class WishesRepository {

    /**
     * ------------------------------------------
     * Save Wish
     * ------------------------------------------
     */

    async saveWish(message) {

        const docRef = await addDoc(

            collection(db, COLLECTION_NAME),

            {

                message,

                createdAt: serverTimestamp()

            }

        );

        return docRef.id;

    }

    /**
     * ------------------------------------------
     * Get All Wishes
     * ------------------------------------------
     */

    async getWishes() {

        const snapshot = await getDocs(

            query(

                collection(db, COLLECTION_NAME),

                orderBy(

                    "createdAt",

                    "desc"

                )

            )

        );

        return snapshot.docs.map(doc => ({

            id: doc.id,

            ...doc.data()

        }));

    }

}

/**
 * ------------------------------------------
 * Singleton
 * ------------------------------------------
 */

const wishesRepository = new WishesRepository();

export default wishesRepository;
