import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClyaxrLOPVY8LIYr-jDLSimYmBpKZLqIs",
  authDomain: "clone-8a213.firebaseapp.com",
  databaseURL: "https://clone-8a213.firebaseio.com",
  projectId: "clone-8a213",
  storageBucket: "clone-8a213.appspot.com",
  messagingSenderId: "307045643292",
  appId: "1:307045643292:web:7ea25e46bd4a9ed18c9bd9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
