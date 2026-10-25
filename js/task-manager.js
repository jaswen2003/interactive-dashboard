// Declare global task array and task idNum
let myTasks = [];
let idNum = 0;

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

function Task(id, task, priority, importance, completion) {
    this.id = id;
    this.name = task;
    this.priority = priority;
    this.isImportant = importance;
    this.isCompleted = completion;
}



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

    // Get the values of the task submitted, its priority, and importance, 
    // from the input elements with id "task-name", "priority", and "important".
    let task = document.getElementById("task-name").value;
    let priority = document.getElementById("priority").value;
    let important = document.getElementById("important").checked;
    
    // Create a Task object for the task.
    // pre-increment idNum in call to give each task its own id.
    let taskObj = new Task(++idNum, task, priority, important, false);

    // Append the task to the end of the global myTasks array
    myTasks.push(taskObj);

    // Create a new list element 
    let newItem = document.createElement("li");

    // Create a new input element and set its type property to checkbox
    // This is to add a checkbox that will mark completion of a task.
    let check = document.createElement("input");
    check.type = "checkbox"
    check.classList.add("task-checkbox");

    // Create a text node that contains the task
    let newTask = document.createTextNode(taskObj.name);

    // Append the checkbox to the task 
    newItem.appendChild(check);
    // Append task to the newItem list element
    newItem.appendChild(newTask);
    // Append the newItem list element to the userTask list
    userTask.appendChild(newItem);

    // Determine if a task is marked as important
    if (important) {
        // If so, update the newItem nodes style property to the color red.
        newItem.style.color = "red";
    }

    // Determine the priority of a task.
    if (priority == "High") {
        // If priority is high, update the newItem nodes style property to the font weight of bold.
        newItem.style.fontWeight = "bold";
        newItem.style.fontStyle = "italic";
    } else if (priority == "Medium") {
        // If priority is medium, update the newItem nodes style property to the font style of italic.
        newItem.style.fontStyle = "italic";
    } // Note: Low priority has no styled text.

    // Add event listener to the checkbox to call complete task whenever the change occurs.
    // () => {completeTask(check, taskObj)} creates a function that calls the completeTask() whenever the change event occurs.
    check.addEventListener("change", () => {completeTask(check, taskObj)});
    // Note: I didn't want to have another function inside another function.

    // Log the contents of the myTasks array in the console
    console.log(JSON.stringify(myTasks));
})

// Create function for completing the task
function completeTask(check, task) {
    // Determine if check was checked or unchecked.
    if (check.checked) {
        // If checked update the related task objects isCompleted property to true.
        task.isCompleted = true;
        // Update the text decoration of checks parent node to add a strike through to the text.
        check.parentNode.style.textDecoration = "line-through";
    } else {
        // If unchecked update the related task objects isCompleted property to False.
        task.isCompleted = false;
        // Update the text decoration of checks parent node to remove strike through from the text.
        check.parentNode.style.textDecoration = "none";
    }

    // Log the contents of the myTasks array in the console
    console.log(JSON.stringify(myTasks));
}


// Add event listener for the Clear Tasks button with "clear-tasks" id
const clearBtn = document.getElementById("clear-tasks");
clearBtn.addEventListener("click", function(event) {
    // Prevent default action of the button
    event.preventDefault();

    // Clear myTasks array
    myTasks = [];
    // Update unordered list with id "user-tasks" to an empty string
    document.getElementById("user-tasks").innerHTML = "";

    // Log the contents of the myTasks array in the console
    console.log(JSON.stringify(myTasks));
})