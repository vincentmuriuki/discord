import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDBpNAUB25qIu0s-uj3pgNOpgxqNb2jM3k",
  authDomain: "discord-d3973.firebaseapp.com",
  databaseURL: "https://discord-d3973.firebaseio.com",
  projectId: "discord-d3973",
  storageBucket: "discord-d3973.appspot.com",
  messagingSenderId: "1088701456659",
  appId: "1:1088701456659:web:c7eccf48b70a24d8b57ae6",
  measurementId: "G-YV14LR7MN0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
