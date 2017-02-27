window.onload = function() {

}


function accountFunc() {

  if(firebase.currentUser = null){
    <!-- if there is no user logged in-->
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
        alert("logged in")
  }).catch(function(error) {
    // Handle Errors here.
    alert(error.message);
  }else{


  }


  });





  firebase.auth().onAuthStateChanged(function(user) { 
        if (user) {   // User is signed in.
          alert(firebase.auth().currentUser)
             } else {   // No user is signed in.

            }
    });
  }
