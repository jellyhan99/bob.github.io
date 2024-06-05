//event listener
//function I(element) {
//   // alert("想啥呢，已經沒有了");
//     element.innerHTML="想啥呢，已經沒有了";
//var J = document.getElementById("J");
J.addEventListener("click", function(){
  //alert("想啥呢，已經沒有了");
  this.innerHTML = "想啥呢，已經沒有了";
})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)