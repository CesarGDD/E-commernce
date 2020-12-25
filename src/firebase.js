import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCk9cjUH6O5H48dRJlAhcSiQtxXpvnshc4",
    authDomain: "base-b40b1.firebaseapp.com",
    databaseURL: "https://base-b40b1.firebaseio.com",
    projectId: "base-b40b1",
    storageBucket: "base-b40b1.appspot.com",
    messagingSenderId: "433862785924",
    appId: "1:433862785924:web:f071ec91526b7503ce3bd1",
    measurementId: "G-C99104WMBK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;