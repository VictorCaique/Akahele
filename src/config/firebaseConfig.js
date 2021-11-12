import firebase, {initializeApp} from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDIE-2J1y3BrdHmdAdA9wior8LNCYSROCM",
    authDomain: "akahele-oficial.firebaseapp.com",
    projectId: "akahele-oficial",
    storageBucket: "akahele-oficial.appspot.com",
    messagingSenderId: "853824910813",
    appId: "1:853824910813:web:146020bf4f8dc89ed23234",
    measurementId: "G-8H8LZRFTZN"
};

const app = initializeApp(firebaseConfig);
// firebase.analytics();
export const database = firebase.firestore(app);
export const storage = firebase.storage(app);
export const auth = firebase.auth(app, "Akahele");
