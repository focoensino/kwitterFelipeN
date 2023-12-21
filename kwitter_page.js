//SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBw8KYTencCQ_agvK-DUs8uRXde_N8wktc",
  authDomain: "vamosconversar-f8c63.firebaseapp.com",
  databaseURL: "https://vamosconversar-f8c63-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-f8c63",
  storageBucket: "vamosconversar-f8c63.appspot.com",
  messagingSenderId: "453009488810",
  appId: "1:453009488810:web:9ae939d6967d9a4c5589d3"
};

  firebase.initializeApp(firebaseConfig);
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
  function send()
  {




	  
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;

  //Inicie a programar aqui



	  
  //Programe até aqui

        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    console.log("clicou no botão curtir - " + message_id);
    
  
  }
  
  function logout() {



	  
  }
