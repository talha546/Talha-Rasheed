// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDDAqG9R3noKjHOvtC4ZD5_LllCNEbkons",
//   authDomain: "blog-app-e8e9a.firebaseapp.com",
//   projectId: "blog-app-e8e9a",
//   storageBucket: "blog-app-e8e9a.appspot.com",
//   messagingSenderId: "171023590",
//   appId: "1:171023590:web:4d2a53c205ccaad5e0ef27",
//   measurementId: "G-XCWVEMDYFB"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// console.log('app==>', app )

// 
 const logoutBtn = document.querySelector(".logout-btn")

logoutBtn.addEventListener("click",()=>{
     window.location.replace("login.html")
 })