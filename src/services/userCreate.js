import {
    auth
} from '../config/firebaseConfig';

const authProvider = auth;


export default function Cadastro(email, password, confirmPassword) {
    var user;
    if (password == confirmPassword) {
        authProvider.createUserWithEmailAndPassword(email, password).then(userCrencials => {
            var usuario = userCrencials.user;
            user = usuario;
            console.log("Cadastro concluido: " + user);

        }).catch(e => {
            console.log("ERROR COD: ", e.code, " ERROR: ", e.message)
        })
    }
    return user;
    console.log(user);
}