import {auth} from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const authProvider = auth;


export function signIn(email, password, confirmPassword){
    console.log(email);
    if (password == confirmPassword){
        authProvider.createUserWithEmailAndPassword(email, password).then(userCrencials => {
                const user = userCrencials.user;
                return user;
        }).catch(e => {
            console.log("ERROR COD: ",e.code," ERROR: ",e.message)
        })
    }
}