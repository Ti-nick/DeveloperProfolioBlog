// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvm4nqIKKSSQu4Chh-F0QEvg50nSWupU",
  authDomain: "developerprofolioblog.firebaseapp.com",
  projectId: "developerprofolioblog",
  storageBucket: "developerprofolioblog.firebasestorage.app",
  messagingSenderId: "386038592919",
  appId: "1:386038592919:web:d6dabe3c7f29611ed440d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
