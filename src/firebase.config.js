import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2_rdOiVrOS4HCREBZVFQD89iRfUaX4aY",
  authDomain: "gojirapp.firebaseapp.com",
  databaseURL: "https://gojirapp-default-rtdb.firebaseio.com",
  projectId: "gojirapp",
  storageBucket: "gojirapp.appspot.com",
  messagingSenderId: "270466661797",
  appId: "1:270466661797:web:fa9f76485da7223884fc4c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
