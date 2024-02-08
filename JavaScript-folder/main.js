 // Prompt the user to enter their name
 var userName = prompt("Please enter your name:");

 // Display a greeting message using the entered name
 alert("Hello, " + userName + "! Welcome to my website.");




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