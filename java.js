   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
   import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
   const firebaseConfig = {
    apiKey: "AIzaSyBJ41E48ZltKRLo67j-pdqqdOQTG-w52TU",
    authDomain: "signup-form-7854a.firebaseapp.com",
    projectId: "signup-form-7854a",
    storageBucket: "signup-form-7854a.appspot.com",
    messagingSenderId: "69073320314",
    appId: "1:69073320314:web:1fd1563cebc0e2e46cfec3",
    measurementId: "G-DMBZN2XYLD"
  };
  
  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log('app-->', app)
  const auth = getAuth(app);
   
   const db = getFirestore (app)
// let signupBtn = document.getElementById('signupBtn');
// let loginBtn = document.getElementById('loginBtn');
// let nameFiled = document.getElementById('nameFiled');
// let title = document.getElementById('title');
 
// // signinBtn.onclick = function(){
// loginBtn.onclick = function(){
// nameFiled.style.maxHeight ='0';
// // title.innerHTML = 'Sign In';
//  title.innerHTML = 'Login';
// signupBtn.classList.add('disable');
// // signinBtn.classList.remove('disable');
// loginBtn.classList.remove('disable');
// }

// signupBtn.onclick = function(){
//     nameFiled.style.maxHeight ='60px';
//     title.innerHTML = 'Sign Up';
//     signupBtn.classList.remove('disable');
//     // signinBtn.classList.add('disable');
//     loginBtn.classList.add('disable');
//     }
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJ41E48ZltKRLo67j-pdqqdOQTG-w52TU",
//   authDomain: "signup-form-7854a.firebaseapp.com",
//   projectId: "signup-form-7854a",
//   storageBucket: "signup-form-7854a.appspot.com",
//   messagingSenderId: "69073320314",
//   appId: "1:69073320314:web:1fd1563cebc0e2e46cfec3",
//   measurementId: "G-DMBZN2XYLD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log('app-->', app);
// const auth = getAuth(app);

let signupBtn = document.getElementById('signupBtn');
console.log(signupBtn)
let loginBtn = document.getElementById('loginBtn');
let nameField = document.getElementById('nameField');
let emailField = document.getElementById('emailField');
let passwordField = document.getElementById('passwordField');
let title = document.getElementById('title');

loginBtn.onclick = function () {
  nameField.style.maxHeight = '0';
  title.innerHTML = 'Login';
  signupBtn.classList.add('disable');
  loginBtn.classList.remove('disable');
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = '60px';
  title.innerHTML = 'Sign Up';
  signupBtn.classList.remove('disable');
  loginBtn.classList.add('disable');
};

// Assuming you have an email and password input fields
// Replace 'emailInput' and 'passwordInput' with your actual input field IDs
let emailInput = document.getElementById('signin-email');
let passwordInput = document.getElementById('signin-password');
let loginemail = document.getElementById('login-email');
let loginpassword = document.getElementById('login-password');

signupBtn.onclick = function () {
  const email = emailInput.value;
  const password = passwordInput.value;
console.log(email,password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};


loginBtn.onclick=function () {
  const email = loginemail.value;
  const password = loginpassword.value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("login",user.uid)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  });
}