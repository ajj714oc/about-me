 // Prompt the user to enter their name
 var userName = prompt("Please enter your name:");

 // Display a greeting message using the entered name
 alert("Hello, " + userName + "! Welcome to my website.");

 

 function didYouEnjoyYourVisit() {
    let visit = confirm("Did you enjoy your visit to my site today?");
    if (visit) {
        // User clicked "OK" (true)
        alert("Great! Would you consider visiting again?");
    } else {
        // User clicked "Cancel" (false)
        alert("Thank you for your honest opinion!");
    }
}