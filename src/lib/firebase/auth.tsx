import {
  onAuthStateChanged as _onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./app";

const onAuthStateChanged = (cb: any) => {
  return _onAuthStateChanged(auth, cb)
}

const signOut = () => {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}

const signIn = async (email: string, pass: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }

}


export {
  onAuthStateChanged,
  signOut,
  signIn
}