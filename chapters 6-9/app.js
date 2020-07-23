// Task 1

document.writeln('Result:<br>');
var a = 10;
document.writeln('The value of a is: '+a+'<br>');
document.writeln('-----------------------------------------------------<br>');
++a;
document.writeln('<br>The value of ++a is: '+a+'<br>');
document.writeln('Now the value of a is: '+a+'<br>');
a++;
document.writeln('<br>The value of a++ is: '+a+'<br>');
document.writeln('Now the value of a is: '+a+'<br>');
--a;
document.writeln('<br>The value of a++ is: '+a+'<br>');
document.writeln('Now the value of a is: '+a+'<br>');
a--;
document.writeln('<br>The value of a++ is: '+a+'<br>');
document.writeln('Now the value of a is: '+a+'<br>');

// Task 2

document.writeln('<br>')
var a = 2;
var b = 1;
var result = --a - --b + ++b +b--;
document.writeln('<br>a is '+a);
document.writeln('<br>b is '+b);
document.writeln('<br>Result is '+result+'<br>');

// Task 3

document.writeln('<br>')
var myName = prompt('Enter You name');
document.writeln('<br>My name is '+myName+'<br>');

// Task 4

document.writeln('<br>')
document.writeln('<br>question 4 is not mentioned in the assignment file<br><br>')

// Task 5

document.writeln('<br>')
var table = prompt('Enter a number')
for(var i=1;i<=10;i++){
    if(table > 0){
        document.writeln(table+' * '+i+' = '+i*table+'<br>')
    }
    else{
        document.writeln('5 * '+i+' = '+i*5+'<br>')
    }
}

// Task 6

document.writeln('<br>')
var totalMarks = 100;
var firstSub = prompt('Enter You 1st Subject')
var secondSub = prompt('Enter You 2nd Subject')
var thirdSub = prompt('Enter You 3rd Subject')
var firstSubMarks = parseInt(prompt('Enter Your Obtained Marks'))
var remainTwoSubMarks = parseInt(prompt('Enter Your Obtained Marks'))
document.writeln('<br><b>Subjects      Total Marks     Obtained Marks      Percentage</b><br>')
document.writeln('<br>'+firstSub+'       '+totalMarks+'       '+firstSubMarks+'      '+firstSubMarks/totalMarks*100+'%<br>')
document.writeln('<br>'+secondSub+'       '+totalMarks+'       '+remainTwoSubMarks+'      '+remainTwoSubMarks/totalMarks*100+'%<br>')
document.writeln('<br>'+thirdSub+'       '+totalMarks+'       '+remainTwoSubMarks+'      '+remainTwoSubMarks/totalMarks*100+'%<br>')
var grandTotal = totalMarks + totalMarks + totalMarks;
var grandObtained = firstSubMarks + remainTwoSubMarks + remainTwoSubMarks;
document.writeln('<br><b>             '+grandTotal+'       '+grandObtained+'      '+grandObtained/grandTotal*100+'%</b><br>')