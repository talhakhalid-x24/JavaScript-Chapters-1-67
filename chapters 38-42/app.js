// task 1

function power(a,b){
    document.write('Value of a is '+a)
    document.write('<br>Value of b is '+b)
    var raised = Math.pow(a,b)
    document.write('<br>Raised value is '+raised)
}
power(2,5);

// task 2

document.write('<br><br>')
var anyYear = parseInt(prompt('Enter any year'))
function leapYear(){
    switch(anyYear){
    case 2012:
        document.write(anyYear+" is a leap year");
        break;
    case 2012:
        document.write(anyYear+" is a leap year");
        break;
    case 2012:
        document.write(anyYear+" is a leap year");
        break;
    default:
        document.write(anyYear+ " is not a leap year");
    }
}
leapYear();

// task 3

document.write('<br><br>')
var a, b, c;
a = parseInt(prompt('Enter value of first side of triangle'))
b = parseInt(prompt('Enter value of second side of triangle'))
c = parseInt(prompt('Enter value of third side of triangle'))
var s = (a+b+c)/3;
function valueOfArea(){
    document.write('The area of triangle is '+areaOfTriangle());
}

function areaOfTriangle(){
    var area = s*((s-a)*(s-b)*(s-c))
    return area;
}

valueOfArea();

// task 4

document.write('<br><br>')
var sub1 = parseInt(prompt('Enter your urdu marks'))
var sub2 = parseInt(prompt('Enter your english marks'))
var sub3 = parseInt(prompt('Enter your maths marks'))
var average;

function studentRecord(){
    document.write('Totals marks of student is '+averageOfMarks())
    document.write('<br>Percentage of student is '+percentageOfMarks().toFixed(2)+'%')
}

function averageOfMarks(){
    average = sub1 + sub2 + sub3;
    return average;
}

function percentageOfMarks(){
    var per = (average*100)/300;
    return per;
}

studentRecord();

// task 5

document.write('<br><br>')
var para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque molestiae at illum dolorum beatae commodi esse numquam quaerat? Error cumque harum doloribus omnis blanditiis reiciendis quaerat, sit totam nobis.'
function indexOfFunc(){
    var alpha = prompt('Enter an alphabet')
    var findIndex = para.indexOf(alpha)
    var i = 0;
    do{
        document.write('Index of alphabet '+alpha+' is '+findIndex++ +'<br>')
        i++;
        findIndex = para.indexOf(alpha, findIndex +1)
    }while(findIndex !== -1)
}
indexOfFunc();

// task 6

document.write('<br><br>')
var sentence = 'Lorem ipsum dolor sit amet.'

function deleteVowel(){
    document.write('Before removing vowels: '+sentence);
    sentence = sentence.replace(/[aeiou]/g,'');
    document.write('<br>After removing vowels: '+sentence);
}
deleteVowel();

// task 7

document.write('<br><br>')
var sentence1 = 'Pleases read this application and give me gratuity';
var hasSeen = false;
function occurenceOfVowels(){
    var vowelCount = 0;
    for(var letter of sentence1.toLowerCase()){
        switch(letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            {
                if(hasSeen){
                    vowelCount++;
                    hasSeen = false;
                }
                else{
                    hasSeen = true;
                }
                break;
            }
            default:
                hasSeen = false;
        }
    }
    return vowelCount;
}
document.write('The total occurance is '+occurenceOfVowels())

// task 8

document.write('<br><br>')
var distanceInKm = parseInt(prompt('Distance Between Karachi to Lahore in Kilometer'))
function mainDistance(){
    document.write('Distance in meter: '+meter())
    document.write('<br>Distance in feet: '+feet())
    document.write('<br>Distance in inch: '+inch())
    document.write('<br>Distance in centimeter: '+centimeter())
}

function meter(){
    var m = distanceInKm * 1000;
    return m;
}

function feet(){
    var f = distanceInKm * 3280.8;
    return f;
}

function inch(){
    var i = distanceInKm * 39370.1;
    return i;
}

function centimeter(){
    var cm = distanceInKm * 100000;
    return cm;
}
mainDistance();

// task 9

document.write('<br><br>')
var workingHours = parseInt(prompt('Enter the working hours of employee'))
function overTime(){
    if(workingHours > 40){
        var overtime = workingHours - 40;
        var overtimePay = overtime * 12.00;
        document.write('The overtime of the employee is '+overtimePay.toFixed(2))
    }
    else{
        document.write("You have to work for more than 40 hours to get over time")
    }
}
overTime();

// task 10

document.write('<br><br>')
var withDraw = parseInt(prompt('Enter your amount'))
function domination(){
    var hundred = Math.floor(withDraw / 100);
    var fifty = Math.floor((withDraw % 100) / 50);
    var ten = Math.floor(((withDraw % 100) % 50) / 10);
    var remain = Math.floor(((withDraw % 100) % 50) % 10);
    document.write('You will have '+hundred+' hundreds notes '+fifty+' fifty notes '+ten+' ten notes and '+remain+' coins')
}
domination();