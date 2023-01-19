// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDlkoOCD7fsk6USfnJeGU4CvkqNIqpMpbk",
//   authDomain: "nonamedm.firebaseapp.com",
//   projectId: "nonamedm",
//   storageBucket: "nonamedm.appspot.com",
//   messagingSenderId: "282516255808",
//   appId: "1:282516255808:web:74440395c1a313078fdba5",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const userCollection = collection(db, "users");

export async function getUsers(setGlobalState) {
  const users = await getDocs(collection(db, "users"));
  users.forEach((doc) => {
    console.log(`${doc.data().messages[0].date}`);
  });
  //   return users;
}

export async function addDocument(userName, userObj) {
  const uid = Date.now().toString();

  try {
    await setDoc(doc(db, "users", uid), {
      ...userObj,
      uid: uid,
    });

    // const user = await addDoc(collection(db, "users"), {
    //   ...userObj,
    //   uid: uid,
    // });

    window.localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        userName: userName,
        userId: uid,
        uid: uid,
      })
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getUser(userId, setState) {
  try {
    const snap = await getDoc(doc(db, "users", userId));
    if (snap.exists()) {
      setState((prev) => ({ ...prev, user: snap.data() }));
    } else {
      console.log("No such document");
    }
  } catch (error) {
    console.log(error);
    setState((prev) => ({ ...prev, fetchErr: true }));
  }
}

export async function addSecretMessage(userId, message) {
  try {
    await updateDoc(doc(db, "users", userId), {
      messages: arrayUnion({ message: message, date: Date.now() }),
    });
  } catch (error) {
    console.log(error);
  }
}
