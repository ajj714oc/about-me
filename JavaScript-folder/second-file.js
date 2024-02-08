
    // JavaScript function to confirm yes or no
    function askYesOrNo() {
        var response = confirm("Did you enjoy your visit to my site today?");
        if (response) {
            alert("That's great!");
        } else {
            alert("Thank you for your honest opinion!");
        }
    }

    // Call the function
    askYesOrNo();
