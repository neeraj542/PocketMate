import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Xv_q358gvzCWcfIS2HZHnLXgfYoFgLE",
  authDomain: "personal-finance-tracker-8c8b6.firebaseapp.com",
  projectId: "personal-finance-tracker-8c8b6",
  storageBucket: "personal-finance-tracker-8c8b6.appspot.com",
  messagingSenderId: "412986989433",
  appId: "1:412986989433:web:25cb38260dfc4f17bfeda8",
  measurementId: "G-QWBX99B483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
