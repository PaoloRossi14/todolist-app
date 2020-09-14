import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHh3nAxJNeETupYEpg8IWfHDJx3vVaKe4",
  authDomain: "todolist-app-c9edb.firebaseapp.com",
  databaseURL: "https://todolist-app-c9edb.firebaseio.com",
  projectId: "todolist-app-c9edb",
  storageBucket: "todolist-app-c9edb.appspot.com",
  messagingSenderId: "816569444895",
  appId: "1:816569444895:web:7893f34469bffd4176432a",
  measurementId: "G-EL69NQ146D",
});

const db = firebaseApp.firestore();

export default db;
