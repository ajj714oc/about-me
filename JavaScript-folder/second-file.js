   // JavaScript function to confirm yes or no
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