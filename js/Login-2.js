import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const db=getDatabase();

let globalData = {};

async function retrieveData(mobile) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'AllStudent/' +"5656"));
    console.log("mobile:"+mobile);
    if (snapshot.exists()) {
      globalData = { ...snapshot.val() }; // Deep copy of data
      console.log(globalData); // Log data after retrieval
      return globalData; // Return globalData
    } else {
      alert("Employee doesn't exist");
    }
  } catch (error) {
    alert("Unsuccessful");
    console.error(error);
  }
}

export { retrieveData };