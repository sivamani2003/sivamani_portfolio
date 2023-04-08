$('.flip-box').on('click', function() {
    $(this).toggleClass('flipped');
    $(this).find('.flip-box-front').toggleClass('hidden');
  });