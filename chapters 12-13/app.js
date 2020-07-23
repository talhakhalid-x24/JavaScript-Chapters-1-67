// Task 1

var aCharacter = prompt('Enter a character')
for(var i='A'; i<='Z'; i++){
    for(var j='a'; j<='z';j++){
        document.writeln('The ASCII code of '+aCharacter+' is '+aCharacter.charCodeAt())
    }
}

// Task 2

document.writeln('<br><br>')
var firstNum = parseInt(prompt('Enter a 1st integer'))
var secondNum = parseInt(prompt('Enter a 2nd integer'))
if(firstNum > secondNum){
    document.writeln(firstNum+' is larger than '+secondNum)
}
else if(firstNum < secondNum){
    document.writeln(secondNum+' is larger than '+firstNum)
}
else if(firstNum === secondNum){
    document.writeln('Both integers are equal')
}

// Task 3

document.writeln('<br><br>')
var aNumber = parseInt(prompt('Enter a number'))
if(aNumber > 0){
    document.writeln(aNumber+' is positive number')
}
else if(aNumber < 0){
    document.writeln(aNumber+' is negative number')
}
else if(aNumber === 0){
    document.writeln(aNumber+' is a zero number')
}

// Task 4

document.writeln('<br><br>')
var aCharacter = prompt('Enter a vowel')
if(aCharacter === 'A' || aCharacter === 'a' || aCharacter === 'E' || aCharacter === 'e' || aCharacter === 'I' || aCharacter === 'i' || aCharacter === 'O' || aCharacter === 'o' || aCharacter === 'U' || aCharacter === 'u'){
    document.writeln('It is a vowel')
}
else{
    document.writeln('It is not a vowel')
}

// Task 5

document.writeln('<br><br>')
var password = 'talha123';
var writePassword = prompt('Enter the password');
if(writePassword === password){
    alert('Correct! The password you entered matches the original password')
}
else if(writePassword === ''){
    alert('Please enter the password')
}
else{
    alert('Incorrect Password')
}

// Task 6

document.writeln('<br><br>')
var greeting = '';
var hour = 13;
if(hour < 18){
    greeting = "Good Day";
    alert(greeting)
}
else{
    greeting = "Good Evening"
    alert(greeting)
}

// Task 7

document.writeln('<br><br>')
var time = 1900;
if(time >= 0000 && time < 1200){
    alert('Good Morning')
}
else if(time >= 1200 && time < 1700){
    alert('Good Afternoon')
}
else if(time >= 1700 && time < 2100){
    alert('Good Evening')
}
else if(time >= 2100 && time < 2359){
    alert('Good Night')
}