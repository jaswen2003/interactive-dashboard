# Interactive Productivity Dashboard

Built for WEB-115, this web based dashboard is used to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.

## Weekly Task Goals
The weekly task goal calculator determines the number of goals the user must complete in the week. The calculator takes input from an HTML form, that prompts the user to enter their name, daily task goal, and weekly bonus goal. Each input element is assigned a related id that is used to read those values in an external JavaScript file. The external script defines an event for when the user clicks the submit button on the form using an event listener on the button elements id. This event describes a function that reads each input values id, performing type conversion if neccessary, and calling the weeklyGoal function. The weeklyGoal function takes three parameters, userName, dailyGoal, and bonusTask, multiplying the dailyGoal by five, to get the number of tasks to be completed each week, and then adds that value to bonusTasks to get the weekly goal. After calculation, it updates a paragraph element to display the users name and weekly goal inside of the page.