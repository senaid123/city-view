import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClUCy3hx8cjw5KxW2LchzhoQjXj9HJtbs",
  authDomain: "job-task-fa0d9.firebaseapp.com",
  projectId: "job-task-fa0d9",
  storageBucket: "job-task-fa0d9.appspot.com",
  messagingSenderId: "856640450933",
  appId: "1:856640450933:web:4cd5f480695eef92f1233c",
  measurementId: "G-68NQY4BZ5G",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
