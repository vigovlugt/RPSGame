$(document).ready(function() {   
loadPage(0);
$( ".draggable" ).draggable();
});

function accountFunc() {
    console.log(firebase.auth().currentUser)
    if (firebase.auth().currentUser == null) {
        <!-- if there is no user logged in-->
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            alert("logged in")
            writeUserData();
        }).catch(function(error) {
            // Handle Errors here.
            alert(error.message);
        })
    } else {
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
    $("." + _page).show();
}

function writeUserData() {
  firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
    username: firebase.auth().currentUser.displayName,
    email: firebase.auth().currentUser.email,
    profile_picture : firebase.auth().currentUser.photoURL
  });
}
