import { storage } from "../config/firebaseConfig";
import database from "../config/firebaseConfig";


export function getImage(doc, ref){
    const imageDownload = "";

    if(ref == "post_image"){
        var urlDocument = ""; 
        database.collection('publicacao').doc(doc).onSnapshot((query)=> {
            console.log(query.data())
            urlDocument = String(query.data().post_image);
        })
        

        storage.ref(urlDocument).getDownloadURL().then((url_image)=>{
            console.log(url_image);
            imageDownload = url_image;
        })
    }

    if(ref == "avatar_image"){
        var urlDocument = ""; 
        database.collection('usuarios').doc(doc).onSnapshot((query)=> {
            document = query.data().post_image
        })
        

        storage.refFromURL(urlDocument).getDownloadURL().then((url_image)=>{
            console.log(url_image);
            imageDownload = url_image;
        })
    }
    return String(imageDownload);
}
