import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword()