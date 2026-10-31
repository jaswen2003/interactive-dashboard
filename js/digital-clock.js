let interval = setInterval(() => {
    // Create new Date object
    let d = new Date()

    // Get the time in hours, minutes, and seconds
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    // Get a readable calendar date
    let date = d.toLocaleDateString();

    // Prepend leading 0 to time values less than 10
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    // Determine A.M. or P.M. 
    session = hours >= 12 ? 'P.M.' : 'A.M.';

    // Update the innerHTML of the corresponding ids of "clock-face" and "calendar-date"
    document.getElementById("clock-face").innerHTML = `${hours}:${minutes}:${seconds} ${session}`;
    document.getElementById("calendar-date").innerHTML = date;
}, 1000);