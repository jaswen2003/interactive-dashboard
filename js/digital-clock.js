// Declare constant that reference HTML elements of ids "clock-face" and "calendar-date"
const clockFace = document.getElementById("clock-face");
const calendarDate = document.getElementById("calendar-date");

function updateClock() {
    // Create new Date object
    let d = new Date()

    // Get the time in hours, minutes, and seconds
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    // Get a readable calendar date
    let date = d.toLocaleDateString();

    // Determine A.M. or P.M. 
    session = hours >= 12 ? 'P.M.' : 'A.M.';

    // Convert from 24-hour format to 12-hour format
    if (hours > 12) {
        hours = hours - 12;
    }

    // Convert hour 0 to 12 (midnight)
    if (hours === 0) {
        hours = 12;
    }

    // Prepend leading 0 to time values less than 10
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    // Update the innerHTML of the clockFace and calenderDate HTML references
    clockFace.innerHTML = `${hours}:${minutes}:${seconds} ${session}`;
    calendarDate.innerHTML = date;
}

// Display the clock when the webpage loads
updateClock();
// Call the updateClock function every second (1000 milliseconds)
setInterval(updateClock, 1000);