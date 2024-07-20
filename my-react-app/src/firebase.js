import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT11E_1vVV6IDAZtbLws6z1Yjroh81dG4",
  authDomain: "fir-login-e6d1c.firebaseapp.com",
  projectId: "fir-login-e6d1c",
  storageBucket: "fir-login-e6d1c.appspot.com",
  messagingSenderId: "961610828286",
  appId: "1:961610828286:web:a524a672156f6c666d58af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
