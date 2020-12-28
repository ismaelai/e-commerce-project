import firebase from 'firebase/app';
//import 'firebase/auth';
const requerideAuth = require('firebase/auth');

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbVHGwobTLaxnpjlGWy06imYTJr2mFDaU',
  authDomain: 'e-commerce-4e4a4.firebaseapp.com',
  databaseURL: 'https://e-commerce-4e4a4.firebaseio.com',
  projectId: 'e-commerce-4e4a4',
  storageBucket: 'e-commerce-4e4a4.appspot.com',
  messagingSenderId: '1088320243458',
  appId: '1:1088320243458:web:d229900d1a06802ad9641b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = requerideAuth; //firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();