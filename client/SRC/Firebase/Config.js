// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlIMfXB_qdOpfp3wNVseHtR7yGMSG5MrI",
  authDomain: "license-plate-social-app.firebaseapp.com",
  projectId: "license-plate-social-app",
  storageBucket: "license-plate-social-app.appspot.com",
  messagingSenderId: "983157730511",
  appId: "1:983157730511:web:21e2c7b7b2331e5839dbba",
  measurementId: "G-27DYZ1CF3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
