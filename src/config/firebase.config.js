import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import envConfig from "./env.config";

const { firebaseConfig } = envConfig;

class FirebaseConfig {
  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(this.app);

    // Initialize Firebase Firestore and get a reference to the service
    this.firestore = getFirestore(this.app);
  }
}

const firebase = new FirebaseConfig();

const { app, auth, firestore: db } = firebase;

export { app, auth, db };
