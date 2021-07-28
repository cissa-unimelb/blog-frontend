import axios from 'axios';

// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/firebase-storage";

// var firebaseConfig = {
//   apiKey: "AIzaSyAzZrqKkU6yX_-eiHH8l6Ba1ubb9cudz-Y",
//   authDomain: "arboreal-vector-311707.firebaseapp.com",
//   projectId: "arboreal-vector-311707",
//   storageBucket: "arboreal-vector-311707.appspot.com",
//   messagingSenderId: "1058060099589",
//   appId: "1:1058060099589:web:78f06ca9d9a03877933c6c",
//   measurementId: "G-LS3QGBLK9F"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

class UploadAdapter {
  constructor(loader, authorName, titleName) {
      this.loader = loader
      this.authorName = authorName
      this.titleName = titleName
  }
  upload() {
      return this.loader.file.then(
          (file, authorName, titleName) =>
              new Promise((resolve, reject) => {
                
                // Use own image database
                var forms = new FormData()
                var configs = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                forms.append('file',file)      
                forms.append('authorName', this.authorName)      
                forms.append('titleName', this.titleName)      
                axios.post('http://127.0.0.1:5000/up_photo',forms,configs).then(res=>{
                    console.log(res)
                    resolve({
                        default: res.data.downloadURL
                    })
                })

                //   // Use firebase reference
                //   let uploadTask = firebase.storage().ref()
                //       .child('images/'+file.name)
                //       .put(file)
                //   uploadTask.on(
                //       firebase.storage.TaskEvent.STATE_CHANGED,
                //       (snapshot) => {
                //           /* snapshot with info about 
                //           the upload progress & metadata */
                //       },
                //       (error) => {
                //           // error handling
                //       },
                //       () => {
                //           // upload successful
                //           uploadTask.snapshot.ref
                //               .getDownloadURL()
                //               .then((downloadURL) => {
                //                   resolve({
                //                       default: downloadURL
                //                   })
                //               })
                //       }
                //   )
              })
      )
  }
}

export default UploadAdapter