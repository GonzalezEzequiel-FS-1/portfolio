// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqFaSNOSBUvQsCZAIgnYvxxGlucERdxOk",
  authDomain: "portfolio-ec4bc.firebaseapp.com",
  projectId: "portfolio-ec4bc",
  storageBucket: "portfolio-ec4bc.firebasestorage.app",
  messagingSenderId: "381449464669",
  appId: "1:381449464669:web:26b0521c0d9b3d45e9d6b4",
  measurementId: "G-GGHM4NMCH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
