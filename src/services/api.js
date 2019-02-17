import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAWghG2s3BJP4WODst1ZksIYJeHndmId7Q",
  authDomain: "aee-js.firebaseapp.com",
  databaseURL: "https://aee-js.firebaseio.com",
  projectId: "aee-js",
  storageBucket: "aee-js.appspot.com",
  messagingSenderId: "717948556291"
};

export default firebase.initializeApp(config);
