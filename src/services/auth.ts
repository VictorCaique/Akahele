import firebase from 'firebase';
import { auth } from '../config/firebaseConfig';
import Cadastro from '../services/userCreate'


export async function singIn(email: string, password: string): Promise<firebase.User | any> {
    var credencials: firebase.auth.UserCredential = {} as firebase.auth.UserCredential
    credencials = await auth.signInWithEmailAndPassword(email, password);

    return credencials.user

}

export function cadastro(email: string, pass: string, confirmPass: string): firebase.User | any {
    const userCredencials = Cadastro(email, pass, confirmPass);
    if (userCredencials) {
        return userCredencials as firebase.User;
    }


}