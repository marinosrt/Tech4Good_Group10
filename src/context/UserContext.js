import React, { createContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from "firebase/auth";



const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    
    const [user, setUser] = useLocalStorage("user", {});

    const signUp = async (email, password, displayName) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName });
        setUser(user);
    };

    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

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
