function addUser () 
{

User_ID = document.getElementById("User_ID").value;
localStorage.setItem("User_ID" , User_ID) ;
window.location = "kwitter_room.html";

}