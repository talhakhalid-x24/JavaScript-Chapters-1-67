// task 1

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var userName = document.getElementById('userName');
var email = document.getElementById('email');
var pswrd = document.getElementById('pswrd');
var repswrd = document.getElementById('repswrd')

function buttonClick(){
    if(firstName.value === "" && lastName.value === "" && userName.value === "" && email.value === "" && pswrd.value === ""){
        alert('Please give your information')
    }
    else{
        if(pswrd.value != repswrd.value){
            alert('Password did not match')
        }
        else{
            document.write('First Name : '+firstName.value+'<br>Last Name : '+lastName.value+'<br>User Name : '+userName.value+'<br>Email : '+email.value+'<br>Pasword : '+pswrd.value)
        }
    }

}

// task 2

var textArea = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum posuere nisl. Etiam enim lorem, pellentesque vitae aliquet ut, fringilla quis libero. Suspendisse tristique ipsum vitae elit placerat, in rutrum lectus accumsan. Ut nisl diam, ullamcorper nec sapien quis, dictum luctus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at tempor mauris. Nulla facilisi. Etiam tempor sed est in tincidunt. Praesent lacinia augue eu mauris rutrum, sit amet feugiat orci auctor. Etiam vehicula cursus nisl, a facilisis tellus. Aliquam condimentum tempor lacus, quis fringilla ante ornare at. Donec molestie auctor nunc, at vulputate neque rutrum at. Proin molestie dolor sed venenatis ultricies. Praesent posuere ut lectus vel fermentum. Maecenas libero nibh, fringilla ut cursus vel, tempor in libero.<br><br>Vivamus justo mi, dignissim convallis auctor ac, pharetra auctor felis. Mauris consequat enim eget sodales suscipit. Vivamus hendrerit erat ac massa ornare ullamcorper. Curabitur sagittis velit sed facilisis facilisis. Nam tempus, mauris a egestas faucibus, enim purus laoreet massa, eget commodo neque magna non sem. Donec rhoncus sem maximus odio lobortis rhoncus. Cras et consequat tortor. Ut ornare, nisi ac egestas vestibulum, ante nibh finibus tortor, sit amet porttitor sapien ante at lectus. Nunc molestie tempor felis et venenatis. Cras efficitur sollicitudin lacus, non finibus magna volutpat gravida."
function seeAllText(){
    document.getElementById('para').innerHTML = textArea;
}

// task 3


var index,table = document.getElementsByTagName('table')[0];
var editButton = document.getElementById('edit').innerHTML;
var nameValue = document.getElementById('first-name');
var classValue = document.getElementById('class');
var courseValue = document.getElementById('course');
var deleteButton = document.getElementById('delete').innerHTML;
var buttonAdd = document.getElementById('buttonAdd')
function addToTable(){
    var newRow = table.insertRow(table.length);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    cell0.innerHTML = editButton;
    cell1.innerHTML = nameValue.value;
    cell2.innerHTML = classValue.value;
    cell3.innerHTML = courseValue.value;
    cell4.innerHTML = deleteButton;
    nameValue.value = "";
    classValue.value = "";
    courseValue.value = "";


}

    
function deleteRow(e){
    e.parentNode.parentNode.remove();
}

function editRow(e){
    var val = e.parentNode.parentNode;
    nameValue.value = val.children[1].innerHTML;
    e.parentNode.parentNode.children[1].innerHTML = nameValue.value;
    classValue.value = val.children[2].innerHTML;
    e.parentNode.parentNode.children[2].innerHTML = classValue.value;
    courseValue.value = val.children[3].innerHTML;
    e.parentNode.parentNode.children[3].innerHTML = courseValue.value;
}