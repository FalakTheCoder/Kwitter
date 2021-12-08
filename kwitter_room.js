
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCP-tpGOiCf4YRmEXdY9SvAvDwxzPodJ7Y",
      authDomain: "kwitter-dfb57.firebaseapp.com",
      databaseURL: "https://kwitter-dfb57-default-rtdb.firebaseio.com",
      projectId: "kwitter-dfb57",
      storageBucket: "kwitter-dfb57.appspot.com",
      messagingSenderId: "932151399370",
      appId: "1:932151399370:web:d92b8c52248bf83212b533"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
