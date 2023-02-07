import { Firestore } from "firebase/firestore";
import FirestoreClient from "./lib/firestore-client.server";
import FirestoreModel from "./lib/firestore-model.server";

/**
 * Given a Firestore connection, returns a function that creates a Firestore model.
 *
 * @param connection
 * @returns
 */
const initializeFirestoreModel =
    (connection: Firestore) =>
    <T>(collectionName: string) => {
        const client = new FirestoreClient(connection);

        return new FirestoreModel(client, collectionName) as T & FirestoreModel<T>;
    };

export default initializeFirestoreModel;
