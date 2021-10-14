import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
 apiKey: "AIzaSyAQR6hf80azwg5-qAdNOcehQAp7lo7GUd8",
 authDomain: "auth-project-ea337.firebaseapp.com",
 projectId: "auth-project-ea337",
 storageBucket: "auth-project-ea337.appspot.com",
 messagingSenderId: "584614356477",
 appId: "1:584614356477:web:9f2d6b52fa9b748f946594",
 measurementId: "G-72CJDF8NPK"
});

export const auth = firebase.auth();

/**GOOGLE AUTH INTEGRATION CODELARI */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;