
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyApB_HLunacb2UYLDxAJP9oTCJpcLteVG8",
      authDomain: "greetingbot-rrij.firebaseapp.com",
      databaseURL: "https://greetingbot-rrij-default-rtdb.firebaseio.com",
      projectId: "greetingbot-rrij",
      storageBucket: "greetingbot-rrij.appspot.com",
      messagingSenderId: "786560952389",
      appId: "1:786560952389:web:719b546eb18cfec83b1b2c",
      measurementId: "G-Y48Y199M05"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
