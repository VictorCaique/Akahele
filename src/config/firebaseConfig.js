import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDIE-2J1y3BrdHmdAdA9wior8LNCYSROCM",
    authDomain: "akahele-oficial.firebaseapp.com",
    projectId: "akahele-oficial",
    storageBucket: "akahele-oficial.appspot.com",
    messagingSenderId: "853824910813",
    appId: "1:853824910813:web:146020bf4f8dc89ed23234",
    measurementId: "G-8H8LZRFTZN"
};

const app = firebase.initializeApp(firebaseConfig);


export const database = firebase.firestore(); 
export const storage = firebase.storage();

export default database;
