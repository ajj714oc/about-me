   // JavaScript function to confirm yes or no
   function askYesOrNo() {
    var response = confirm("Did you enjoy your visit to my site today?");
    if (response) {
        alert("You confirmed with 'Yes'");
    } else {
        alert("You confirmed with 'No'");
    }
}

// Call the function
askYesOrNo();