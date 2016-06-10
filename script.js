// alert("hello world");
var imageNumber = 1;
var imageName = "images/classProject-";
var imageId="classProject-";

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

console.log(mainImage.src, nextButton, prevButton);
//on click

function goNext(){
  if( imageNumber <5){
    console.log("go next");
imageNumber = imageNumber + 1;
var newSrc = imageName + imageNumber + ".jpg";

console.log(newSrc);
mainImage.src = newSrc;
 }
}
function goBack() {
  console.log("go back");
  if(imageNumber > 1 ) {
imageNumber = imageNumber - 1;
var newSrc = imageName + imageNumber + ".jpg";
console.log(newSrc);
mainImage.src = newSrc;
 }
}

nextButton.addEventListener("click", goNext);
prevButton.addEventListener("onclick", goBack);
