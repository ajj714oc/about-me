 // Prompt the user to enter their name
 var userName = prompt("Please enter your name:");

 // Display a greeting message using the entered name
 alert("Hello, " + userName + "! Welcome to my website.");

 function askYesOrNo() {
    var response = confirm("Please confirm with yes or no:");
    if (response) {
        alert("You confirmed with 'Yes'");
    } else {
        alert("You confirmed with 'No'");
    }
}

// Call the function
askYesOrNo();
