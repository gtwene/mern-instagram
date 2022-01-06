import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
  authDomain: "instagram-clone-23884.firebaseapp.com",
  databaseURL: "https://instagram-clone-23884.firebaseio.com",
  projectId: "instagram-clone-23884",
  storageBucket: "instagram-clone-23884.appspot.com",
  messagingSenderId: "671034896143",
  appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// const firebaseConfig = {
//   apiKey: "AIzaSyDkQMkekgGdBfo9AJItfzmWHdMKBVtqtwI",
//   authDomain: "insta-clone-720a7.firebaseapp.com",
//   projectId: "insta-clone-720a7",
//   storageBucket: "insta-clone-720a7.appspot.com",
//   messagingSenderId: "579632755732",
//   appId: "1:579632755732:web:6324480b6df9b48a452301"
// };
