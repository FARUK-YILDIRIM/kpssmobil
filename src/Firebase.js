import firebase from 'firebase';
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const Firebase = firebase.initializeApp(config);
export default Firebase;
