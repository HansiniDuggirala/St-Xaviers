const firebaseConfig = {
      apiKey: "AIzaSyDo3s6BkM90Ry3aKPlf-h0wJQdXkIFYDSc",
      authDomain: "kwitter-bade1.firebaseapp.com",
      databaseURL: "https://kwitter-bade1-default-rtdb.firebaseio.com",
      projectId: "kwitter-bade1",
      storageBucket: "kwitter-bade1.appspot.com",
      messagingSenderId: "1016143434307",
      appId: "1:1016143434307:web:d3cc1b941b77c89653baf6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("User_ID");
document.getElementById("User_name").innerHTML="Welcome " + user_name + "!" ; 

 function addRoom()
{
      Room_names = document.getElementById("Room_name").value;
      firebase.database().ref ("/").child(Room_names).update
({
      pourpose : "adding room name "
}) ; 

localStorage.setItem("room_names " , Room_names) ; 
window.location = "#";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function redirectToRoomName (name)
{

console.log(name);
localStorage.setItem ("room_names" , Room_names);
window.location = "kwitter_page.html" ; 

}
function logout ()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html" ;

}