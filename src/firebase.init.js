// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAN5Pf3R7esCjKZ2aX49S7c8dXwGZRzxsk',
    authDomain: 'simple-km.firebaseapp.com',
    projectId: 'simple-km',
    storageBucket: 'simple-km.appspot.com',
    messagingSenderId: '729962788012',
    appId: '1:729962788012:web:ebb54ec7f56a93c6791b09',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
