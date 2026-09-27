# Interactive Productivity Dashboard

Built for WEB-115, this web based dashboard is used to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.

## Weekly Task Goals
The weekly task goal calculator determines the number of goals the user must complete in the week. The calculator takes input from an HTML form, that prompts the user to enter their name, daily task goal, and weekly bonus goal. Each input element is assigned a related id that is used to read those values in an external JavaScript file. The external script defines an event for when the user clicks the submit button on the form using an event listener on the button elements id. This event describes a function that reads each input values id, performing type conversion if neccessary, and calling the weeklyGoal function. The weeklyGoal function takes three parameters, userName, dailyGoal, and bonusTask, multiplying the dailyGoal by five, to get the number of tasks to be completed each week, and then adds that value to bonusTasks to get the weekly goal. After calculation, it updates a paragraph element to display the users name and weekly goal inside of the page.

## Metric Converter
The metric converter is a simple algorithm that takes a value and converts it into another unit of measurement such as imperial or metric. The program works for converting inches and feet into centimeters, yards into meters, miles into kilometers, and the other way around. It takes a numeric value from an input element and a specified conversion rule from a select list element to determining the conversion type. It works by using a series of if/else-if statements to determine which units to convert the value to. It then multiplies the number by the related conversion value, displaying the previous number and the converted value to a designated output paragraph element, with the correct units alongside each value.

### Logic and Pseudocode
BEGIN  
INPUT numVal  
INPUT convType  
IF convType is equal to "in to cm"  
	SET result = numVal * 2.54  
	OUTPUT numVal + " inches equals " + result + " centimeters."  
ELSE IF convType is equal to "ft to cm"  
	SET result = numVal * 30.48  
	OUTPUT numVal + " feet equals " + result + " centimeters."  
ELSE IF convType is equal to "yd to m"  
	SET result = numVal * 0.91  
	OUTPUT numVal + " yards equals " + result + " meters."  
ELSE IF convType is equal to "mi to km"  
	SET result = numVal * 1.61  
	OUTPUT numVal + " miles equals " + result + " kilometers."  
ELSE IF convType is equal to "cm to in"  
	SET result = numVal * 0.39  
	OUTPUT numVal + " centimeters equals " + result + " inches."  
ELSE IF convType is equal to "cm to ft"  
	SET result = numVal * 0.0328  
	OUTPUT numVal + " centimeters equals " + result + " feet."  
ELSE IF convType is equal to "m to yd"  
	SET result = numVal * 1.09  
	OUTPUT numVal + " meters equals " + result + " yards."  
ELSE IF convType is equal to "km to mi"  
	SET result = numVal * 0.62  
	OUTPUT numVal + " kilometers equals " + result + " miles."  
END

## Magic Eight Ball
The Magic Eight Ball is a game where the user asks a yes or no question, and the Eight Ball will respond with a number of preset responses. The program prompts the user to enter their question into the input field and hold the Eight Ball down with their mouse to shake it. Upon release, the script uses the Math.random() method, to generate a random number within the index of a defined array. The array is preloaded with 6 different answers and the response will depend on the randomly generated index. Part of the Eight Ball image is then overwritten with a new circle that will display the response received by the script. When clicking the "Ask Another Question" Box, the full Eight Ball image is restored and the input field is cleared, allowing the user to ask another question. Below, there is a new input field and button which allow the user to add a new response into the Eight Ball. After typing a response and clicking the button, the new answer is then pushed into the array, a popup confirms to the user a new response was added, the input field is cleared, then the response and new length of the array is displayed to console. After adding the response, it then has a chance of appearing when asking a question.