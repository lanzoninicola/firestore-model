export interface FirebaseAppConfig {
    /** The Firebase JSON configuration */
    configProd: any;
    /** The Firebase JSON configuration */
    configDev: any;
}

export type FirestoreDocumentId = string;
export type FirestoreDocument = { [key: string]: any };
