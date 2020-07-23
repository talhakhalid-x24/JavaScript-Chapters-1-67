var zeroVar = 'letters';
var firstVar = 'numbers';
var secondVar = '$';
var thirdVar = '_';
var senSitive = 'sensitive';
var keyWords = 'keywords';

document.writeln('Variable names can only contain '+zeroVar+' , '+firstVar+ ' , ' +secondVar+' and '+thirdVar+ '. For example $my_1stVariable');
document.writeln('<br>Variables must begin with a '+zeroVar+ ' , '+secondVar+ ' or '+thirdVar+ '. For example $name, _name or name');
document.writeln('<br>Variable names are case '+senSitive);
document.writeln('<br>Variable names should not be JS '+keyWords);