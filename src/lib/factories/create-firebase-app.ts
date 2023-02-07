import { initializeApp } from "firebase/app";
import { serverError } from "../../utils/api-errors";

/**
 * Creates a firebase app instance to pass to the firestore client and create the connection.
 *
 * @param param0
 * @param param0.configProd  The production config (JSON file)
 * @param param0.configDev  The development config (JSON file)
 * @returns The firebase app instance
 *
 * @private
 */
function createFirebaseApp({ configProd, configDev }) {
    const config = process.env.NODE_ENV === "production" ? configProd : configDev;

    if (!config) {
        serverError("No firebase config provided. Please provides the JSON file.");
    }

    const firebaseApp = initializeApp({
        projectId: config.project_id,
    });

    return firebaseApp;
}

export default createFirebaseApp;
