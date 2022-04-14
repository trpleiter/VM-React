import React, {createContext, useContext, useState, useEffect} from "react";
import {auth} from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
} from 'firebase/auth'

export const AuthContext = createContext({
    currentUser: null,
    status: 'pending',
    signup: () => Promise,
    verifyEmail: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    forgotPasswordMail: () => Promise,
    resetPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState('pending');
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setStatus('done')
        })
        return unsubscribe;
    }, [])

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function verifyEmail(user) {
        return sendEmailVerification(auth.currentUser)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function forgotPasswordMail(email) {
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/login'})
    }

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgotPasswordMail,
        resetPassword,
        verifyEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {status === 'done' ? children : <div className="loader"></div>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

