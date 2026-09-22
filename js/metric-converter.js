function metricConverter(numVal, convType) {
    // Declare result and output variables
    let result, output;

    // Inches to centimeter conversion
    if (convType === "in to cm") {
        result = numVal * 2.54;
        output = (numVal + " Inches = " + result.toFixed(2) + " Centimeters.");
    } 
    // Feet to centimeter conversion
    else if (convType === "ft to cm") {
        result = numVal * 30.48;
        output = (numVal + " Feet = " + result.toFixed(2) + " Centimeters.");
    } 
    // Yards to meters conversion
    else if (convType === "yd to m") {
        result = numVal * 0.91;
        output = (numVal + " Yards = " + result.toFixed(2) + " Meters.");
    } 
    // Miles to kilometers conversion
    else if (convType === "mi to km") {
        result = numVal * 1.61;
        output = (numVal + " Miles = " + result.toFixed(2) + " Kilometers.");
    } 
    // Centimeters to inches conversion
    else if (convType === "cm to in") {
        result = numVal * 0.39;
        output = (numVal + " Centimeters = " + result.toFixed(2) + " Inches.");
    } 
    // Centimeters to feet conversion
    else if (convType === "cm to ft") {
        result = numVal * 0.0328;
        output = (numVal + " Centimeters = " + result.toFixed(2) + " Feet.");
    } 
    // Meters to yards conversion
    else if (convType === "m to yd") {
        result = numVal * 1.09;
        output = (numVal + " Meters = " + result.toFixed(2) + " Yards.");
    } 
    // Kilometers to miles conversion
    else if (convType === "km to mi") {
        result = numVal * 0.62;
        output = (numVal + " Kilometers = " + result.toFixed(2) + " Miles.");
    }

    // Update innerHTML element with the output
    document.getElementById("conversion").innerHTML = output;
}

// Define the convert button and add event for when the button is clicked.
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function(event){
    // Prevent submission of the form
    event.preventDefault();

    // Declare and initialize parameters
    let numVal = parseFloat(document.getElementById("value").value);
    let convType = document.getElementById("type").value;

    // Call the metric conversion function to convert units of measurement
    metricConverter(numVal, convType);
})
