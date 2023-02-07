# firestore-model

Status: WIP

Tiny library to help you use Firestore with your models.

## Usage

In your project, you need to create a file to initialize the connection with firestore.

```
// firestore.config.ts
import { createFirestoreConnection, initializeFirestoreModel } from "../modules/firestore-models";

import firebaseConfigProd from "./environment.json";

const connection = createFirestoreConnection({
configProd: firebaseConfigProd,
configDev: firebaseConfigProd,
});

const createFirestoreModel = initializeFirestoreModel(connection);

export default createFirestoreModel;
```

After that, you can create your models based on the interface you want.

```
// user.model.ts
import { createFirestoreModel } from "../../modules/firestore-models";

export interface ClientModel {
id: string | null;
name: string;
username: string;
password: string;
status: string;
phoneNumber1: string;
phoneNumber2: string;
contactName: string;
createdAt: string;
updatedAt: string;
}

const clientModel = createFirestoreModel<ClientModel>("clients");

export default clientModel;
```

## TODO

[ ] Adding test
