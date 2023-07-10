// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYQgW7s_44MBI5MrYOsSQSZKw1-hLwEgM",
  authDomain: "hotel-booking-fd79f.firebaseapp.com",
  projectId: "hotel-booking-fd79f",
  storageBucket: "hotel-booking-fd79f.appspot.com",
  messagingSenderId: "185110757280",
  appId: "1:185110757280:web:f3afe7b2af1af74556aec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };