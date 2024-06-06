import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQnVOVysQAxRRvyhoAEnyZliJd7BoDl6Q",
  authDomain: "auth-fir-js.firebaseapp.com",
  projectId: "auth-fir-js",
  storageBucket: "auth-fir-js.appspot.com",
  messagingSenderId: "806091422726",
  appId: "1:806091422726:web:ed0e88a71de307971bd787"
};




firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };