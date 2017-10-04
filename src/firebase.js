import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAR48vz5fVRMkPE4R3jS-eI8JRnqEVlBNc",
  authDomain: "garnett-42475.firebaseapp.com",
  databaseURL: "https://garnett-42475.firebaseio.com",
  projectId: "garnett-42475",
  storageBucket: "garnett-42475.appspot.com",
  messagingSenderId: "741733387760"
};
var fire = firebase.initializeApp(config);

export default fire;