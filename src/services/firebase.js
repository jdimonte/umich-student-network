// Import the functions you need from the SDKs you need
import dotenv from 'dotenv'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC9Twwy5koPWka32OJlo-m3Z3dWBp_sFK0",
    authDomain: "umich-student-network.firebaseapp.com",
    projectId: "umich-student-network",
    storageBucket: "umich-student-network.appspot.com",
    messagingSenderId: "65504113816",
    appId: "1:65504113816:web:cf761384d5e670a9c1cced",
    measurementId: "G-VFRZVGRP2T"
})

dotenv.config()

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}

export const logOut = () => {
    auth.signOut().then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}