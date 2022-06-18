import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZhvWcLXfdAVAcIgdH4WOdaoCW3egjqM0",
  authDomain: "whatsapp-cac11.firebaseapp.com",
  projectId: "whatsapp-cac11",
  storageBucket: "whatsapp-cac11.appspot.com",
  messagingSenderId: "1023229204645",
  appId: "1:1023229204645:web:62ac126a1f55add345154c"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };