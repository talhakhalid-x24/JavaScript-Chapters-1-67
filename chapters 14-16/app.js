// Task 1 to 6

var studentsNames = {StudentName:''};
var studentsNamesArr = [''];
var strArr = ['talha','shahzaib','kawish'];
var numArr = [1,2,3,4,5];
var boolArr = [true,false];
var mixedArr = [1,'Talha',true,3,5,'Shahzaib',false,'kawish'];
console.log(studentsNames)
console.log(studentsNamesArr)
console.log(strArr)
console.log(numArr)
console.log(boolArr)
console.log(mixedArr)

// Task 7

document.writeln('<br><br>')
document.writeln('<h1>Qualifications</h1>')
var eduArr = {1:'SSC',2:'HSC',3:'BCS',4:'BS',5:'BCOM',6:'MS',7:'M.Phil.',8:'PhD'}
document.writeln('1) '+eduArr[1]+'<br>')
document.writeln('2) '+eduArr[2]+'<br>')
document.writeln('3) '+eduArr[3]+'<br>')
document.writeln('4) '+eduArr[4]+'<br>')
document.writeln('5) '+eduArr[5]+'<br>')
document.writeln('6) '+eduArr[6]+'<br>')
document.writeln('7) '+eduArr[7]+'<br>')
document.writeln('8) '+eduArr[8])

// Task 8

document.writeln('<br><br>')
var stdNames = ['Talha','Shahzaib','Kawish']
var stdScore = [320,230,480]
var totalMarks = 500;
document.writeln('Score of '+stdNames[0]+' is '+stdScore[0]+'. Percentage: '+stdScore[0]/totalMarks*100+'%<br>')
document.writeln('Score of '+stdNames[1]+' is '+stdScore[1]+'. Percentage: '+stdScore[1]/totalMarks*100+'%<br>')
document.writeln('Score of '+stdNames[2]+' is '+stdScore[2]+'. Percentage: '+stdScore[2]/totalMarks*100+'%<br>')

// Task 9

document.writeln('<br><br>')
var colorNames = ['Black','Yellow','Red']
document.writeln('<h3>My Colors</h3>')
document.writeln(colorNames+'<br>')

// Task 9a

colorNames.unshift('White')
document.writeln('<h3>Add one color in the begining</h3>')
document.writeln(colorNames+'<br>')

// Task 9b

colorNames.push('Green')
document.writeln('<h3>Add one color in the end</h3>')
document.writeln(colorNames+'<br>')

// Task 9c

colorNames.unshift('Oranger','Blue','Purple')
document.writeln('<h3>Add two or more colors in the begining</h3>')
document.writeln(colorNames+'<br>')

// Task 9d

colorNames.shift();
document.writeln('<h3>Delete one color from the begining</h3>')
document.writeln(colorNames+'<br>')

// Task 9e

colorNames.pop();
document.writeln('<h3>Delete one color from the end</h3>')
document.writeln(colorNames+'<br>')

// Task 9f

colorNames.splice(2, 0, "Pink", "Voilet", "Grey");
document.writeln('<h3>Add two or more colors in anywhere</h3>')
document.writeln(colorNames+'<br>')

// Task 9g

colorNames.splice(4,6);
document.writeln('<h3>Delete two or more colors from anywhere</h3>')
document.writeln(colorNames+'<br>')

// Task 10

document.writeln('<br><br>')
var score = [320,230,480,120]
document.writeln('Scores of Students '+score)
document.writeln('<br>Ordered Scores of Students '+score.sort())

// Task 11

document.writeln('<br><br>')
var citiesList = ['Karachi','Lahore','Islamabad','Quetta','Peshawar']
document.writeln('Cities List:<br>'+citiesList)
document.writeln('<br><br>Selected Cities List:<br>'+citiesList.slice(2,4))

// Task 12

document.writeln('<br><br>')
var arr = ['This','is','my','cat']
document.writeln('<h1>Array</h1>')
document.writeln(arr)

document.writeln('<h1>String:</h1>')
document.writeln(arr.join())

// Task 13

document.writeln('<br><br>')
var devices = new Array('Keyboard','Mouse','Monitor','Printer')
document.writeln('Devices:<br>'+devices)
document.writeln('<br><br>Out:<br>'+devices[0])
document.writeln('<br>Out:<br>'+devices[1])
document.writeln('<br>Out:<br>'+devices[2])
document.writeln('<br>Out:<br>'+devices[3])

// Task 14

document.writeln('<br><br>')
var devices = new Array('Keyboard','Mouse','Monitor','Printer')
document.writeln('Devices:<br>'+devices)
document.writeln('<br><br>Out:<br>'+devices[3])
document.writeln('<br>Out:<br>'+devices[2])
document.writeln('<br>Out:<br>'+devices[1])
document.writeln('<br>Out:<br>'+devices[0])

// Task 15

document.writeln('<br><br>')
var phoneManufacturers = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.writeln('Phone Manufacturers:<br>'+phoneManufacturers+'<br><br>')
document.writeln('Phone Manufacturers in Dropdown: <br>'+phoneManufacturers[0]+'<br>')
document.writeln(phoneManufacturers[1]+'<br>')
document.writeln(phoneManufacturers[2]+'<br>')
document.writeln(phoneManufacturers[3]+'<br>')
document.writeln(phoneManufacturers[4]+'<br>')
document.writeln(phoneManufacturers[5])
