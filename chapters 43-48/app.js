// task 1

function google(){
    alert('Go to google')
}

// task 2

function mobile(){
    alert('Thanks for puchasing mobile from us')
}

// task 3
var table = document.getElementById("table").childNodes;
for(var x = 0 ; x < 10 ; x++){
}
function deleteR(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

// task 4

function mouseOver(){
    document.getElementById('img').setAttribute('src','https://image.shutterstock.com/image-photo/white-smoke-cloud-black-background-260nw-1439539445.jpg')
}

function mouseOut(){
    document.getElementById('img').setAttribute('src','https://image.shutterstock.com/image-illustration/abstract-blue-red-smoke-steam-260nw-1468643051.jpg')
}

// task 5

var counter = 0;
var counterHeading = document.getElementById('counter')

function increaseNum(){
    if(counter < 9){
        counter++;
        counterHeading.innerHTML = '0' + counter;
    }
    else{
        counter++;
        counterHeading.innerHTML = counter;
    }
}

function decreaseNum(){
    if(counter <= 0){
        counter = 0;
    }
    else  if(counter <= 10){
        counter--;
        counterHeading.innerHTML = '0' + counter;
    }
    else{
        counter--;
        counterHeading.innerHTML = counter;
    }
}

var countValueNum = document.getElementById('countvalue');
function countValue(){
    countValueNum.innerHTML = 'Count<br>';
    countValueNum.innerHTML += counterHeading.innerHTML;
    counterHeading.innerHTML = '0'+ 0;
    counter = 0;
}