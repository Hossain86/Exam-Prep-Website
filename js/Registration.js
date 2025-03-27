import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, child, get, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const db=getDatabase();
const auth=getAuth();

var name=document.getElementById("name");
var school=document.getElementById("school");
var mobile=document.getElementById("mobile");
var email=document.getElementById("email");
var passwords=document.getElementById("password");
var progress=0;
progress++
console.log("progress : "+typeof(progress)+" "+progress)

var subRegistrationBtn=document.querySelector(".sub-button")

subRegistrationBtn.onclick = function submitRegistration(e) {
  e.preventDefault();
  var obj = {
    name: name.value,
    email: email.value,
    password: passwords.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("SignUp Successful");
      // Add data to the database after successful registration
      return set(ref(db, 'AllStudent/' + mobile.value), {
        name: name.value,
        school: school.value,
        mobile: mobile.value,
        email: email.value,
        password: passwords.value,
        progress:progress
      });
    })
    .then(() => {
      alert("Data Added To Database");
      window.location.reload();
    })
    .catch(function (err) {
      alert("Error: " + err.message);
    });
};


