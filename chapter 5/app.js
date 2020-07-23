// Task 1 & 2

var firstNum = 8;
var secondNum = 5;
var sum = firstNum+secondNum;
var minus = firstNum-secondNum;
var multiply = firstNum*secondNum;
var divide = firstNum/secondNum;
document.writeln('The sum of '+firstNum+' and '+secondNum+' is '+sum+'<br>');
document.writeln('<br>The difference of '+firstNum+' and '+secondNum+' is '+minus+'<br>');
document.writeln('The multiplication of '+firstNum+' and '+secondNum+' is '+multiply+'<br>');
document.writeln('The division of '+firstNum+' and '+secondNum+' is '+divide+'<br>');

// Task 3

var firstValue;
document.writeln('<br>Value after variable declaration is: '+firstValue);
var secondValue = 5;
document.writeln('<br>Initial value: '+secondValue);
secondValue++;
document.writeln('<br>Value after increment is: '+secondValue);
secondValue = secondValue + 7;
document.writeln('<br>Value after addition is: '+secondValue);
secondValue--;
document.writeln('<br>Value after decrement is: '+secondValue);
secondValue = secondValue % 3;
document.writeln('<br>The remainder is: '+secondValue+'<br>');

// Task 4

var costOfTickets = 600;
var quantity = 5;
var totalPrice = costOfTickets * quantity;
document.writeln('<br>Total cost to buy '+quantity+' tickets to a movie is '+totalPrice+'<br>');

// Task 5

document.writeln('<h1>Table of 4</h1>');
var tableOf4 = 4;
for(var i=1;i<=10;i++){
    document.writeln('<br>'+tableOf4+' * '+i+' = '+tableOf4*i+'<br>');
}

// Task 6

document.writeln('<h1>The Temperature Converter</h1>')
var celsius = 25;
var fahrenheit= 70;
var oC = (fahrenheit - 32) * 5/9;
var oF = (celsius * 9/5) +32;
document.writeln('<br>'+celsius+'⁰C is '+oF+'⁰F');
document.writeln('<br>'+fahrenheit+'⁰F is '+oC+'⁰C<br>');

// Task 7

document.writeln('<br><h1>Shopping Cart</h1>')
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;
document.writeln('Price of item 1 is '+priceOfItem1)
document.writeln('<br>Quantity of item 1 is '+quantityOfItem1)
document.writeln('<br>Price of item 2 is '+priceOfItem2)
document.writeln('<br>Quantity of item 2 is '+quantityOfItem2)
document.writeln('<br>Shipping Charges '+shippingCharges)
var totalCost = (priceOfItem1*quantityOfItem1)+(priceOfItem2*quantityOfItem2)+shippingCharges;
document.writeln('<br>Total Cost of your order is '+totalCost+'<br>')

// Task 8

document.writeln('<br><h1>Marksheet</h1>')
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks) * 100;
document.writeln('Total Marks : '+totalMarks)
document.writeln('<br>Marks Obtained : '+marksObtained)
document.writeln('<br>Percentage : '+percentage+'%<br>')

// Task 9

document.writeln('<br><h1>Currency in PKR</h1>')
var dollar  = 104.80;
var riyal = 28;
var totalCurrency = (dollar*10) + (riyal*25);
document.writeln('1 US Dollar = '+dollar+' Pakistani Rupee <br>1 Saudi Riyal = '+riyal+' Pakistani Rupee')
document.writeln('<br>Total Currency in PKR is '+totalCurrency+'<br>');

// Task 10

var aNumber =  6;
document.writeln('<br>A number is '+aNumber);
aNumber = aNumber + 5;
document.writeln('<br>After addition of 5 a number becomes '+aNumber);
aNumber = aNumber * 10;
document.writeln('<br>After multiplication by 10 a number becomes '+aNumber);
aNumber = aNumber / 2;
document.writeln('<br>After division by 2 a number becomes '+aNumber+'<br>');

// Task 11

document.writeln('<br><h1>Age Calculator</h1>')
var currentYear = 2020;
var birthYear = 1998;
var myAge = currentYear - birthYear;
document.writeln('<br>Current Year : '+currentYear);
document.writeln('<br>Birth Year : '+birthYear);
document.writeln('<br>My age is : '+myAge+'<br>');

// Task 12

document.writeln('<br><h1>The Geometrizer</h1>')
var radiusOfCircle = 20;
var circumference = 2 * 3.142 * 20;
var areaOfCircle = 3.142 * 20 * 20;
document.writeln('<br>Radius of circle: '+radiusOfCircle);
document.writeln('<br>The circumference is: '+circumference);
document.writeln('<br>The area is: '+areaOfCircle+'<br>');

// Task 13

document.writeln('<br><h1>The Lifetime Supply Calculator</h1>')
var currentAge = 15;
var estimateMaxAge = 65;
var amountOfSnacks = 3;
var totalSnacks = (65 -15) * 3;
document.writeln('<br>Favourite Snacks: Chocolate Chips');
document.writeln('<br>Current Age: '+currentAge);
document.writeln('<br>Estimated Maximum Age: '+estimateMaxAge);
document.writeln('<br>Amount of Snacks per day: '+amountOfSnacks);
document.writeln('<br>You will need '+totalSnacks+' Chocolate Chips to last you until the ripe old age of '+estimateMaxAge);
