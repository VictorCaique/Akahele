import '../config/firebaseConfig';

var app = {
    initialize: () => {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    buscar: (doc, ref) => {
        var db = firebase.default.firestore();
        var pub = db.collection('publicacao')
        var imageDownload = "";

        if (ref == "post_image") {
            var post;
            pub.doc(doc).onSnapshot((query) => {
                console.log(query.data())
                post = query.data();
            })


            storage.ref(ref).child(post.post_image).getDownloadURL().then((url_image) => {
                console.log(url_image);
                imageDownload = url_image;
            })
        }

        if (ref == "avatar_image") {
            var urlDocument = "";
            database.collection('usuarios').doc(doc).onSnapshot((query) => {
                document = query.data().post_image
            })


            storage.refFromURL(urlDocument).getDownloadURL().then((url_image) => {
                console.log(url_image);
                imageDownload = url_image;
            })
        }
        return String(imageDownload);
    }
}

app.initialize();