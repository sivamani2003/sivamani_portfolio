var slideIndex1 = 1;
showSlide1(slideIndex1); 
function nextSlide1() {
  showSlide1(slideIndex1 += 1);
}
function prevSlide1() {
  showSlide1(slideIndex1 -= 1);
}
function showSlide1(n) {
  var slides1 = document.getElementsByClassName("slide1");
  if (n > slides1.length) {slideIndex1 = 1;}
  if (n < 1) {slideIndex1 = slides1.length;}
  for (var i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1 - 1].style.display = "block";
}