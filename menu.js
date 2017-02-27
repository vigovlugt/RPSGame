




const titles = document.getElementsByClassName('title');
window.onload = function() {
    titles[0].innerHTML = "tst"
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
}


function accountFunc() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    alert(error.message);
  });





  firebase.auth().onAuthStateChanged(function(user) { 
        if (user) {   // User is signed in.
          alert(firebase.auth().currentUser)
             } else {   // No user is signed in.

            }
    });
  }
