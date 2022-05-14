
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

    user_name = localStorage.getItem("User_ID"); 
    room_name = localStorage.getItem("room_names")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name =message_data ['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>" ;
message_with_tag = "<h4 class= 'messgae' >" + message + "</h4>"
like_button = " <button class= 'btn btn-warning' id= "+firebase_message_id+" value = "+like+" onclick='updateLike(this.id)'> ";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+" </span> </button> <hr> ";
row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function send()
{

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push
({

      name:user_name,
      message:msg,
      like: 0

})
document.getElementById("msg").value = "";
}

function updateLike (message_id)
{

console.log("clicked on like button -"+ message_id );
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes= Number (likes) + 1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update
({

like: update_likes

});
}

function logout ()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html" ;

}