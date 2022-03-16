import React, { useContext, useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [pending, setPending] = useState(true);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setPending(false);
      // console.log(currentUser.uid);
    });
    return unSubscribe();
  }, []);

  if (pending) {
    return (
      <div className=" bg-slate-400 min-h-screen flex justify-center items-center">
        <div className="flex space-x-2 p-5 justify-center items-center flex-col">
          {/* <div className="bg-[#0C2B50] p-2 w-4 h-4 rounded-full animate-bounce"></div>
          <div className="bg-[#BDDFF4] p-2 w-4 h-4 rounded-full animate-bounce"></div>
          <div className="bg-[#0C2B50] p-2 w-4 h-4 rounded-full animate-bounce"></div> */}
          <div
            className="ease-linear rounded-full border-4 border-t-4 
          border-gray-200 h-12 w-12 mb-4 border-t-blue-500 animate-spin"
          ></div>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
