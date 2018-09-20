import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCXNrb3dmHxX559QtQF4y6dGTVeKkv4U9g",
  authDomain: "lunch-app-2c933.firebaseapp.com",
  databaseURL: "https://lunch-app-2c933.firebaseio.com",
  projectId: "lunch-app-2c933",
  storageBucket: "lunch-app-2c933.appspot.com",
  messagingSenderId: "1061287126797"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.EmailAuthProvider();

export const restaurants = database.ref("/restaurants");
