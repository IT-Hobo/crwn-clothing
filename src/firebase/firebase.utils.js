import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAzOZlrNGuuaXUXmd5jPFkay-n2cspfjbo",
  authDomain: "crwn-db-2ad8b.firebaseapp.com",
  projectId: "crwn-db-2ad8b",
  storageBucket: "crwn-db-2ad8b.appspot.com",
  messagingSenderId: "135437300008",
  appId: "1:135437300008:web:10d16e8a365eb8bf44a01d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;