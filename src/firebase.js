import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_fQj7fBRRMjBFNBD6Sj34PZj5ZoBqLDQ",
  authDomain: "workflow-82177.firebaseapp.com",
  projectId: "workflow-82177",
  storageBucket: "workflow-82177.appspot.com",
  messagingSenderId: "941480133743",
  appId: "1:941480133743:web:730daba659ec95e012799a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
