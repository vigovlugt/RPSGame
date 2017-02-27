$(document).ready(function() {   


});


function accountFunc() {
  console.log(firebase.currentUser)
    if (firebase.currentUser == null) {
        <!-- if there is no user logged in-->
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            alert("logged in")
        }).catch(function(error) {
                // Handle Errors here.
                alert(error.message);
            })} else {
                loadPage(4);

            }


        }


    firebase.auth().onAuthStateChanged(function(user) { 
        if (user) {   // User is signed in.
          console.log(user);
        } else {   // No user is signed in.

        }
    });

function loadPage(_page) {
    $(".page").hide();
    switch (_page) {
        case 0:     // overview

            break;
        case 1:    // play

            break;
        case 2:     // friends

            break;
        case 3:     // inventory

            break;
        case 4  :   // account

            break;
    }

}
