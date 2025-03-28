  import { firebaseConfig } from "./firebaseConfig.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  const app = initializeApp(firebaseConfig);

  import { getDatabase, ref, child, get, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

  const db=getDatabase();
  const auth=getAuth();

  var mobilelogin=document.getElementById('mobilelogin');
  var email=document.getElementById("login-email");
  var passwords=document.getElementById("login-password");
  var loginsubbutton=document.querySelector(".login-sub-button");

  loginsubbutton.onclick = function loginAndRetrieveData(e) {
    e.preventDefault();
    var obj = {
      mobile:mobilelogin.value,
      email: email.value,
      passwords: passwords.value,
    };
  //console.log("mobile"+mobilelogin.value)
    signInWithEmailAndPassword(auth, obj.email, obj.passwords)
      .then(function (userCredential) {
        var user = userCredential.user; 
        console.log("mobilelogin.value "+mobilelogin.value);
        let inputData=mobilelogin.value;
        localStorage.setItem('inputData', mobilelogin.value);
        console.log("Setting input data in localStorage: " + inputData);

        console.log(user.uid);
        alert("Logged Successfully");
        setTimeout(() => {
          window.location.replace('welcome.html');
        }, 1000);
        
      })
      .catch(function (err) {
        window.location.replace('Login.html');
        alert("Login error: " + err);
        console.log("Unsuccessful login");
      });
  };

    