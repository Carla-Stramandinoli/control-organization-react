import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBz9Yt7rEIbA8tbdQVzegn85AJebmgCSnw",
  authDomain: "control-organizacion.firebaseapp.com",
  projectId: "control-organizacion",
  storageBucket: "control-organizacion.appspot.com",
  messagingSenderId: "719075016979",
  appId: "1:719075016979:web:698167beac98051adcdae6",
  measurementId: "G-R5YRMRGTSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;