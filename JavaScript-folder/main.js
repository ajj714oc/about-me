 // Prompt the user to enter their name
 var userName = prompt("Please enter your name:");

 // Display a greeting message using the entered name
 alert("Hello, " + userName + "! Welcome to my website.");

 

    function didYouEnjoyYourVisit() {
        let visit = confirm("Did you enjoy your visit to my site today?");
        if (visit === "yes" || visit === "No") {
            document.write("Would you consider visiting again?");
        } else {
            document.write("Thank you for your honest opinion!");
        }
    }

   