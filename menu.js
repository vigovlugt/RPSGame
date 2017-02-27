




const titles = document.getElementsByClassName('title');
window.onload = function() {
    titles[0].innerHTML = "tst"
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
}


function accountFunc() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
        alert("logged in")
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
