import { Firestore, getFirestore } from "firebase/firestore";
import { type FirebaseAppConfig } from "./lib/types";
import createFirebaseApp from "./lib/factories/create-firebase-app";

/**
 * Returns the existing default Firestore instance that is associated with the provided @firebase/app#FirebaseApp.
 *
 * @param config
 * @returns The firestore connection to pass to the createFirestoreModel factory
 */

function createFirestoreConnection(config: FirebaseAppConfig): Firestore {
    const firebaseApp = createFirebaseApp(config);

    return getFirestore(firebaseApp);
}

export default createFirestoreConnection;
