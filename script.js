    // Your web app's Firebase configuration
    const firebaseConfig = {
       apiKey: "AIzaSyDix2b-xCtZ1zabAy3muIRpv307zJ6sXoA",
  authDomain: "send-esms.firebaseapp.com",
  databaseURL: "https://send-esms-default-rtdb.firebaseio.com",
  projectId: "send-esms",
  storageBucket: "send-esms.appspot.com",
  messagingSenderId: "304041024188",
  appId: "1:304041024188:web:370ae3e067e6c2f5d60eb9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



	function writeData() {
        firebase.database().ref("User").set({
            name: document.getElementById("email").value,
            Age: document.getElementById ("name").value
        });
	}
