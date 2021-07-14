// import { firebase } from '../utilities/firebase'
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyAzZrqKkU6yX_-eiHH8l6Ba1ubb9cudz-Y",
  authDomain: "arboreal-vector-311707.firebaseapp.com",
  projectId: "arboreal-vector-311707",
  storageBucket: "arboreal-vector-311707.appspot.com",
  messagingSenderId: "1058060099589",
  appId: "1:1058060099589:web:78f06ca9d9a03877933c6c",
  measurementId: "G-LS3QGBLK9F"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class UploadAdapter {
  constructor(loader) {
      this.loader = loader
  }
  upload() {
    console.log("123");

      return this.loader.file.then(
          (file) =>
              new Promise((resolve, reject) => {
                //   // firebase reference
                  let uploadTask = firebase.storage().ref()
                      .child('images/'+file.name)
                      .put(file)
                  uploadTask.on(
                      firebase.storage.TaskEvent.STATE_CHANGED,
                      (snapshot) => {
                          /* snapshot with info about 
                          the upload progress & metadata */
                      },
                      (error) => {
                          // error handling
                      },
                      () => {
                          // upload successful
                          uploadTask.snapshot.ref
                              .getDownloadURL()
                              .then((downloadURL) => {
                                  resolve({
                                      default: downloadURL
                                  })
                              })
                      }
                  )
              })
      )
  }
}

export default UploadAdapter