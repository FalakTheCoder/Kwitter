
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
      row = "<div class='room_name' id= "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hi " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}