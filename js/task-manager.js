// Function for calculating the weekly goal and updating inner html
function weeklyGoal(userName, dailyGoal, bonusTasks) {
        // Calculate weekly goal based on number of workdays (5) per week
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        let totalGoal = weeklyGoal + bonusTasks; 

        // Create output string
        let output = ("User: " + userName +  "<br>Total Weekly Goal: " + totalGoal);

        // Update inner html with the output string
        document.getElementById("goal-message").innerHTML = output;
}

// Add event listener for the submit button with "goal-btn" id
const goalBtn = document.getElementById("goal-btn");
goalBtn.addEventListener("click", function(event){
    // Prevent submission of the form
    event.preventDefault();

    // Get the values for userName, dailyGoal, and bonusTasks from html based on input elements id
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily").value); // Convert the value of the input to a number
    let bonusTasks = Number(document.getElementById("bonus").value); // Convert the value of the input to a number

    // Call the weeklyGoal function
    weeklyGoal(userName, dailyGoal, bonusTasks);
})
