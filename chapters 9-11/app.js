// Task 1

var city = prompt('Enter a city name');
if(city === 'karachi' || city === 'Karachi' || city === 'KARACHI'){
    document.writeln('Welcome to city of lights')
}
else{
    document.writeln('Error')
}

// Task 2

document.writeln('<br>')
var gender = prompt('Enter your gender');
if(gender === 'Male' || gender === 'male' || gender === 'MALE'){
    document.writeln('Good Morning Sir')
}
else if(gender === 'Female' || gender === 'female' || gender === 'FEMALE'){
    document.writeln('Good Morning Mam')
}

// Task 3

document.writeln('<br>')
var signalColor1 = prompt('Enter 1st light')
var signalColor2 = prompt('Enter 2nd light')
var signalColor3 = prompt('Enter 3rd light')
document.writeln('<hr>Signal Color:          Message<hr>')
if(signalColor1 === 'Red' || signalColor1 === 'RED' || signalColor1 === 'red'){
    document.writeln('<br>Red:       Must Stop<br>')
}
if(signalColor2 === 'Yellow' || signalColor2 === 'YELLOW' || signalColor2 === 'yellow'){
    document.writeln('<br>Yellow:       Ready to Move<br>')
}
if(signalColor3 === 'Green' || signalColor3 === 'GREEN' || signalColor3 === 'green'){
    document.writeln('<br>Green:       Move Now<br>')
}

// Task 4

document.writeln('<br>')
var remainingFuel = parseFloat(prompt('Input the Remaining Fuel in Car'))
if(remainingFuel < 0.25){
    document.writeln('Please refill the fuel in your car')
}
else{
    document.writeln('Enjoy Your ride')
}

// Task 5a

document.writeln('<br>')
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// Task 5b

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// Task 5c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// Task 5d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// Task 5e

if (true){
    alert("True");
}
if (false){
    alert("False");
}

// Task 5f

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Task 6

document.writeln('<br>')
document.writeln('<h1>Marksheet</h1>')
var firstSubMarks = parseInt(prompt('Enter your 1st Subject Marks'))
var secondSubMarks = parseInt(prompt('Enter your 2nd Subject Marks'))
var thirdSubMarks = parseInt(prompt('Enter your 3rd Subject Marks'))
var totalMarks = parseInt(prompt('Enter Total Marks'));
var obtainedTotalMarks = firstSubMarks + secondSubMarks + thirdSubMarks;
var percentage = obtainedTotalMarks/totalMarks*100;
document.writeln('Total Marks: '+totalMarks+'<br>')
document.writeln('Marks Obtained: '+obtainedTotalMarks+'<br>')
document.writeln('Percentage: '+percentage+'%<br>')
if(percentage >= 80){
    document.writeln('Grade: A-One<br>')
    document.writeln('Remarks: Excellent')
}
else if(percentage >= 70){
    document.writeln('Grade: A<br>')
    document.writeln('Remarks: Good')
}
else if(percentage >= 60){
    document.writeln('Grade: B<br>')
    document.writeln('Remarks: You need to improve')
}
else if(percentage < 60){
    document.writeln('Grade: Fail<br>')
    document.writeln('Remarks: Sorry')
}

// Task 7

document.writeln('<br>')
document.writeln('<h1>Guess Game</h1>')
var secretNumber = 5;
var guessTheNumber = parseInt(prompt('Enter a number from 1 to 10'))
if(secretNumber === guessTheNumber){
    document.writeln('Bingo! Correct answer')
}
else if(++secretNumber === guessTheNumber){
    document.writeln('Close enough to the correct answer')
}
else{
    document.writeln('Sorry you lose the game')
}

// Task 8

document.writeln('<br>')
var aNumber = parseInt(prompt('Enter a number'))
if(aNumber % 3 === 0 ){
    document.writeln('The number is divisible by 3')
}
else{
    document.writeln('the number is not divisible by 3')
}

// Task 9

document.writeln('<br>')
var aNumber = parseInt(prompt('Enter a number'))
if(aNumber % 2 === 0 ){
    document.writeln('The number is even')
}
else{
    document.writeln('the number is odd')
}

// Task 10

document.writeln('<br>')
var temperature = parseInt(prompt('Enter a number'))
if(temperature > 40){
    document.writeln('It is too hot outside.')
}
else if(temperature > 30){
    document.writeln('The Weather today is Normal.')
}
else if(temperature > 20){
    document.writeln('Today’s Weather is cool.')
}
else if(temperature > 10){
    document.writeln('OMG! Today’s weather is so Cool.')
}

// Task 11

document.writeln('<br>')
var firstNum = parseInt(prompt('Enter a 1st number'))
var secondNum = parseInt(prompt('Enter a 2nd number'))
var opertion = prompt('What is your operator?')
var sum = firstNum+secondNum;
var minus = firstNum-secondNum;
var multiply = firstNum*secondNum;
var divide = firstNum/secondNum;
var remainder = firstNum%secondNum;
if(opertion === '+'){
    document.writeln('The sum of two numbers is '+sum)
}
else if(opertion === '-'){
    document.writeln('The difference of two numbers is '+minus)
}
else if(opertion === '*'){
    document.writeln('The multiplication of two numbers is '+multiply)
}
else if(opertion === '/'){
    document.writeln('The division of two numbers is '+divide)
}
else if(opertion === '%'){
    document.writeln('The remainder after dividing two numbers is '+remainder)
}