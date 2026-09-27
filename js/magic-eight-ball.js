// Put your JavaScript code in this file

// Magic Eight Ball answers array.
let answers = ["Yes", "No", "Maybe", "Absolutely", "Possibly", "Ask Again Later"];

// Function to determine and display the Magic Eight Balls answer.
function displayAnswer() {
    // Define a random index based on the length of the answers array.
    let index = Math.floor(Math.random() * answers.length);

    // Update the innerHTML element with id of "circle" to display
    // the Magic Eight Balls answer answer based on the random index.   
    document.getElementById("circle").style.display = 'block';   
    document.getElementById("circle").innerHTML = answers[index];
}

// Define the eightBall element and add event for when the user clicks down on mouse. 
const eightBall = document.getElementById("ball");
eightBall.addEventListener("mousedown", function(event){
    // Prevent the default event
    event.preventDefault(); 

    // Determine if the user typed anything into the input field
    if (!document.getElementById("question").value) {
        window.alert("Please, enter a question.");
    } else {
        displayAnswer();
    }
})

// Define the reset button and add event for when the button is clicked.
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function(event){
    // Prevent the default event
    event.preventDefault();

    // Set the style of the "circle" element to "none".
    document.getElementById("circle").style.display = 'none';
    // Clear the question input field.
    document.getElementById("question").value = "";
})

// Define the add response button and add event for when button is clicked.
const addBtn = document.getElementById("addResp");
addBtn.addEventListener("click", function(event){
    // Prevent the default event
    event.preventDefault();

    // Get the value to be added into the array
    let response = document.getElementById("newResponse").value;

    // Determine if the user typed in a response.
    if (!response) {
        window.alert("Cannot add empty response.");
    } else {
        // Add the response to the answers array.
        answers.push(response);

        // Inform user the response has been added.
        window.alert("Response Added");        
        // Clear the response input field.
        document.getElementById("newResponse").value = "";

        // Display the response and new array length into console
        console.log("New Response: " + response);
        console.log("Number of Responses: " + answers.length);
    }
})