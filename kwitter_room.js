// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBotE7MhJvJEiZAq363sfB8SMky_fGEkY",
  authDomain: "lets-chat-aaeac.firebaseapp.com",
  databaseURL: "https://lets-chat-aaeac-default-rtdb.firebaseio.com",
  projectId: "lets-chat-aaeac",
  storageBucket: "lets-chat-aaeac.appspot.com",
  messagingSenderId: "676209615742",
  appId: "1:676209615742:web:59fa5f732e24b4aca3892f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
