// task 1(i)

var content = document.getElementById('main-content');

// (ii)

var childOfContent = content.childNodes;
for(var i=0 ; i< childOfContent.length; i++){
    console.log(childOfContent[i])
}

// (iii)

for(var j=0;j<content.childNodes.length;j++){
    var render = content.childNodes[j].textContent;
    document.write(render+'<br>')
}

// (iv)

var firstName = document.getElementById("first-name");
firstName.setAttribute('value','Enter Your First Name')

// (v)

var lastName = document.getElementById("last-name");
lastName.setAttribute('value','Enter Your Last Name')

var email = document.getElementById("email");
email.setAttribute('value','Enter Your Email')

// task 2(i)

var formContent = document.getElementById('form-content').nodeType;
console.log(formContent)

// (ii)

var lastNameElement = document.getElementById('lastName');
console.log(lastNameElement.nodeType)
console.log(lastNameElement.childNodes)

// (iii)

var findChildNode = content.hasChildNodes('lastName')
console.log(findChildNode)

// (iv)

var firstChild = content.firstChild;
var lastChild = content.lastChild;
console.log(firstChild)
console.log(lastChild)

// (v)

var nextElement = lastNameElement.nextSibling;
var prevElement = lastNameElement.previousSibling;
console.log(nextElement)
console.log(prevElement)

// (vi)

var parentEmail = email.parentNode;
console.log(parentEmail)
console.log(email.nodeType)