
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.getAnalytics();

// var database = firebase.database();

// function sendBlog() {
    
//     var user = document.getElementById('post1').value;
//     var tle = document.getElementById('post2').value;
//     var bl = document.getElementById('post3').value;

//     console.log(user, tle, bl);

//     var newBlogKey = database.ref().child('blogs').push().key;

//     database.ref('blogs/'+newBlogKey+'/user').set(user);
//     database.ref('blogs/'+newBlogKey+'/tle').set(tle);
//     database.ref('blogs/'+newBlogKey+'/bl').set(bl);
// }

// document.getElementById('write').addEventListener('submitBtn',submitForm)

// function submitForm(e) {
//     e.preventDefault();
// }
