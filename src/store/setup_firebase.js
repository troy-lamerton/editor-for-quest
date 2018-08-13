// Import the Firebase modules that you need in your app.
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyAw_IUy2KFlEv6YltB0yJqBkPxIqaXzAlg',
  authDomain: 'quest-scripts.firebaseapp.com',
  databaseURL: 'https://quest-scripts.firebaseio.com',
  messagingSenderId: '442289064154',
  projectId: 'quest-scripts',
  storageBucket: 'quest-scripts.appspot.com',
};
export default firebase.initializeApp(config);
