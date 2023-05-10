import React, { createContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage(false);
    
    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => { unsubscribe() }
    })



    return (
        <UserContext.Provider value={{ user, setUser, signUp, logIn, logOut, googleSignIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
