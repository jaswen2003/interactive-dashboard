// Declare global task array
let myTasks = [];

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

// Create a unordered list element with an id of "user-tasks"
const userTask = document.createElement("ul");
userTask.id = "user-tasks";
// Get the task list div from its id and append the new userTask list to it
const taskList = document.getElementById("task-list");
taskList.appendChild(userTask);

// Add event listener for the Add Task button with "add-task" id
const taskBtn = document.getElementById("add-task");
taskBtn.addEventListener("click", function(event) {
    // Prevent submission of the form
    event.preventDefault();

    // Get the value of the task submitted in the input element with id "task-name"
    let task = document.getElementById("task-name").value;
    // Append the task to the end of the global myTasks array
    myTasks.push(task);

    // Create a new list element 
    let newItem = document.createElement("li");
    // Create a text node that contains the task
    let newTask = document.createTextNode(task);
    // Append the task to the newItem list element
    newItem.appendChild(newTask);
    // Append the newItem list element to the userTask list
    userTask.appendChild(newItem);

    // Display the contents of the myTasks array in the console
    console.log("myTasks: " + myTasks);
})

// Note: I decided to add the below for fun
// Add event listener for the Clear Tasks button with "clear-tasks" id
const clearBtn = document.getElementById("clear-tasks");
clearBtn.addEventListener("click", function(event) {
    // Prevent default action of the button
    event.preventDefault();

    // Clear myTasks array
    myTasks = [];
    // Update unordered list with id "user-tasks" to an empty string
    document.getElementById("user-tasks").innerHTML = "";

    // Display the contents of the myTasks array in the console
    console.log("myTasks: " + myTasks);
})