import firebase from 'firebase';
import { auth } from '../config/firebaseConfig';



export async function singIn(email: string, password: string): Promise<firebase.User | any> {
    var credencials: firebase.auth.UserCredential = {} as firebase.auth.UserCredential
    credencials = await auth.signInWithEmailAndPassword(email, password);

    return credencials.user

}

export async function cadastro(email: string, pass: string, confirmPass: string): Promise<firebase.User | any> {
    if (pass == confirmPass) {
        const userCredencials = await auth.createUserWithEmailAndPassword(email, pass).catch(e => {
            console.log("erro: " + e);
        });
        console.log("Cadastro concluido: ", userCredencials)
        return (userCredencials as firebase.auth.UserCredential).user
    }

}