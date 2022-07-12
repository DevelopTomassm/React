//Libraries and functions imports
import { createContext, useContext, useEffect } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail,} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useState } from "react";

//This function starts the context
export const authContext = createContext();
//This function checks if there is an authentication provider
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("No hay proveedor de autenticacion");
  }

  return context;
};
//This function contains the functionality of being able to create a user, log in, change password and log in with google
export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);



  useEffect(() => {
    //This function represents the state of the authenticated user, that is, this function is executed every time someone logs in or logs out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log("auth provider load");
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {" "}
      {children}{" "}
    </authContext.Provider>
  );
}
