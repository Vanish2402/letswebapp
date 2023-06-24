function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyAdmf2DlezhrivyeiLUGgMMu-z6tWj1nqU",
    authDomain: "lets-chat-web-app-83698.firebaseapp.com",
    projectId: "lets-chat-web-app-83698",
    storageBucket: "lets-chat-web-app-83698.appspot.com",
    messagingSenderId: "124742525237",
    appId: "1:124742525237:web:3d7f28fe1e95af88e9ac7c"
  };
  