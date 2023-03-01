user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
    msg=document.getElementById("msg").value;
    firebase.dataBase().ref(room_name).push({
        name:user_name,
        menssage:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function getData() {
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

firebase_menssager_id=childKey;
menssager_data=childData;
console.log(firebase_menssager_id);
console.log(menssager_data);
name=menssager_data['name'];
menssager=menssager_data["mensager"];
like=menssager_data['like'];
mane_with_tag="<h4>"+name+ + "<img class='usser_tick' src='cfd.png'></h4>";
menssage_with_tag="<h4 class='menssage_h4'>"+ menssage+ "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + menssage_with_tag + like_button+ sapn_with_tag
    }