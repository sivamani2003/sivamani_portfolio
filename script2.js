var slideIndex2 = 1;
            showSlide(slideIndex2); 
            function nextSlide2() {
              showSlide(slideIndex2 += 1);
            }
            function prevSlide2() {
              showSlide(slideIndex2 -= 1);
            }
            function showSlide(n) {
              var slides = document.getElementsByClassName("slide2");
              if (n > slides.length) {slideIndex2 = 1;}
              if (n < 1) {slideIndex2 = slides.length;}
              for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              slides[slideIndex2 - 1].style.display = "block";
            }