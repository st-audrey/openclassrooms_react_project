import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAfnQUf51F64mDgo3bKIL3jcJBVcG14ACs",
  authDomain: "openclassrooms-react-project.firebaseapp.com",
  projectId: "openclassrooms-react-project",
  storageBucket: "openclassrooms-react-project.appspot.com",
  messagingSenderId: "836985397472",
  appId: "1:836985397472:web:88fe19fd0d0776d8f37085"
});

export const auth = app.auth();
export default app;

