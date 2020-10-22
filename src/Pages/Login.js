
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-hPuu-_ReUMgev-oc1q--HZ9YGA4E27g",
  authDomain: "pwa-olx-clone-application.firebaseapp.com",
  databaseURL: "https://pwa-olx-clone-application.firebaseio.com",
  projectId: "pwa-olx-clone-application",
  storageBucket: "pwa-olx-clone-application.appspot.com",
  messagingSenderId: "84902198027",
  appId: "1:84902198027:web:e48766300c221b785f400e",
  measurementId: "G-CMSYW7QQKR",
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export const google_provider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database();
export const storage = firebase.storage();
