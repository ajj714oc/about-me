 // JavaScript function to confirm yes or no
 function askYesOrNo() {
    var response = confirm("Did you enjoy your visit to my site today?");
    if (response) {
        alert("Thank you for visitig!");
    } else {
        alert("Thank you for your honest opinion!");
    }
}

// Call the function
askYesOrNo();