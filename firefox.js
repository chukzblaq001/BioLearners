


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj97-ItNuVgSNqI7RW4kHPSrrW_JpOkac",
  authDomain: "biolearn-2ad8c.firebaseapp.com",
  projectId: "biolearn-2ad8c",
  storageBucket: "biolearn-2ad8c.firebasestorage.app",
  messagingSenderId: "404571404915",
  appId: "1:404571404915:web:43e55bde1b62db00a30806",
  measurementId: "G-HSMJY1YTL0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
