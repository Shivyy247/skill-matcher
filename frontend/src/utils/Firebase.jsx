import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDhAo65ndznYtSF032ViwqUVJKXJqb2H9k",
  authDomain: "skill-matcher-7a9e8.firebaseapp.com",
  projectId: "skill-matcher-7a9e8",
  storageBucket: "skill-matcher-7a9e8.firebasestorage.app",
  messagingSenderId: "623993857456",
  appId: "1:623993857456:web:1a8d8f59a4a3b2fda4a275",
  measurementId: "G-DF09T6YBCM",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}