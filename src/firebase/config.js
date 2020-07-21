import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDmVEYS2n0zTktYYcbtrGumS-bkfIw_bNg',
  authDomain: 'demologin1-ffe22.firebaseapp.com',
  databaseURL: 'https://demologin1-ffe22.firebaseio.com',
  projectId: 'demologin1-ffe22',
  storageBucket: 'demologin1-ffe22.appspot.com',
 // messagingSenderId: '12345-insert-yourse',
  appId: '1:443842715808:android:01fac939d1b44cf687e9c5',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };