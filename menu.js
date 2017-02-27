$(document).ready(function() {   
alert("test");
});


function accountFunc() {

    if (firebase.currentUser = null) {
        <!-- if there is no user logged in-->
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            alert("logged in")
        }).catch(function(error) {
                // Handle Errors here.
                alert(error.message);
            } else {


            }


        });

    firebase.auth().onAuthStateChanged(function(user) { 
        if (user) {   // User is signed in.
            alert(firebase.auth().currentUser) 
        } else {   // No user is signed in.

        }
    });
}

function loadPage(var _page) {
    $(".page").hide();
    switch (_page) {
        case 0: // overview




            break;
        case 1: // play

            break; // friends

        case 2: // inventory

            break;
        case 3: // account

            break;

    }

}
