
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDktJv51ItoZWR1p7BL7VQ_zUXYBxakv40",
  authDomain: "BasketBuddy-f4534.firebaseapp.com",
  projectId: "BasketBuddy-f4534",
  storageBucket: "BasketBuddy-f4534.appspot.com",
  messagingSenderId: "472969868097",
  appId: "1:472969868097:web:d054b2b9524689389be7c0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


