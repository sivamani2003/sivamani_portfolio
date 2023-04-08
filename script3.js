var slideIndex3 = 1;
                showSlide3(slideIndex3); 
              
                function nextSlide3() {
                  showSlide3(slideIndex3 += 1);
                }
              
                function prevSlide3() {
                  showSlide3(slideIndex3 -= 1);
                }
              
                function showSlide3(n) {
                  var slides = document.getElementsByClassName("slide");
                  if (n > slides.length) {slideIndex3 = 1;}
                  if (n < 1) {slideIndex3 = slides.length;}
                  for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                  }
                  slides[slideIndex3 - 1].style.display = "block";
                }