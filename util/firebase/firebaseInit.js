import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';
// require('firebase/firestore')
// const firebaseConfig = require('./firebaseConfig');


let app;
try {
  app = initializeApp(firebaseConfig);
} catch(error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack)
  }
}

// Initialize Cloud Firestore through Firebase
let db = getFirestore(app);

module.exports = db;
