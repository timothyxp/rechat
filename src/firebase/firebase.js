import firebaseApp from 'firebase/app';


var config = {
    apiKey: "AIzaSyBmpWrsJPFAZhETVlYSJC-ljvxuzdroR2Y",
    authDomain: "resandjer.firebaseapp.com",
    databaseURL: "https://resandjer.firebaseio.com",
    projectId: "resandjer",
    storageBucket: "resandjer.appspot.com",
    messagingSenderId: "586233307507"
 };

let instants;

export default () => {
  if (!instants) {
    instants = firebaseApp.initializeApp(config);
  }

  return instants;
};