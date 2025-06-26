import { initializeApp } from "firebase/app";   
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwPeJpkvLEVfLLugNPz3DH1995Yxfiex8",
  authDomain: "face-recog-d8c1d.firebaseapp.com",
  projectId: "face-recog-d8c1d",
  storageBucket: "face-recog-d8c1d.firebasestorage.app",
  messagingSenderId: "144495478888",
  appId: "1:144495478888:web:64639924112f84613e13dd",
  measurementId: "G-YVGWG6TDNW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};