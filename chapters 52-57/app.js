// task 1

var myPics = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.png','images/5.jpg',
'images/6.jpg','images/7.png','images/8.jpg','images/9.jpg','images/10.jpg',
'images/11.jpg','images/12.jpg','images/13.jpg','images/14.png','images/15.jpg']

for(var i=0; i < myPics.length;i++){
    var imgElement = document.createElement('img');
    imgElement.setAttribute('class','images-all')
    imgElement.src = myPics[i];
    imgElement.setAttribute('onclick','showModal()')
    var src = document.getElementById("x");
    src.appendChild(imgElement);
}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function showModal(){
    setTimeout(()=>{ modal.style.display = "block"; }, 550)
    modalImg.src = imgElement.src;
}

var span = document.getElementsByClassName("close")[0];
function closeModal() {
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

// task 2

var textDiv = document.getElementById('y')
var para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus ipsa, unde non sequi error repellendus distinctio libero praesentium perspiciatis, ex maiores vel dolorem, tenetur iusto. Possimus asperiores quam obcaecati."
var createPara = document.createElement('p');
createPara.setAttribute('class','para')
var createParaText = document.createTextNode(para);
createPara.appendChild(createParaText)
textDiv.appendChild(createPara)

var zoomButtons = document.getElementById('button')

var zoomIn = document.createElement('button')
zoomIn.setAttribute('onclick','zoomIN()')
var zoomInText = document.createTextNode('+')
var zoomInPlace = zoomIn.appendChild(zoomInText)
zoomButtons.appendChild(zoomIn)

var zoomOut = document.createElement('button')
zoomOut.setAttribute('onclick','zoomOUT()')
var zoomOutText = document.createTextNode('-')
var zoomOutPlace = zoomOut.appendChild(zoomOutText)
zoomButtons.appendChild(zoomOut)


var fontSize = 10;
function zoomIN() {
	fontSize += 10;
	createPara.style.fontSize = fontSize + "px";
}
function zoomOUT() {
    fontSize -= 10;
    if(fontSize<=10){
        fontSize = 10;
    }
    else{
        createPara.style.fontSize = fontSize + "px";
    }
}