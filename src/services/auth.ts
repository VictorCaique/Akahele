import firebase from 'firebase';
import Cadastro from '../services/userCreate'

interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}

export function singIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'bdhasbdhasby161234bhaas1252fdasfbahsdfbha',
                user: {
                    name: 'Victor Caique',
                    email: 'victor.caique@email.com',
                }
            })
        }, 1000)
    })
}

export function cadastro(email: string, pass: string, confirmPass: string): firebase.User | any {
    const userCredencials = Cadastro(email, pass, confirmPass);
    if (userCredencials) {
        return userCredencials as firebase.User;
    }
}