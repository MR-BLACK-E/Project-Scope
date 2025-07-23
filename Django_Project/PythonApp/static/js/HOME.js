

$(document).ready(function() {
  $("#fadeBox").hide().fadeIn(2000);  // Fades in after page load
});

$(document).ready(function() {
  $("#fadeBox").delay(3000).fadeOut(1000);  // Waits 3 sec, then fades out
});

// SMOOTH

  $(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 800); // smooth scroll in 800ms
    })
  });


//SCROLL

  $(document).ready(function () {
    // Fade-in scroll effect
    function fadeOnScroll() {
      $('.fade-on-scroll').each(function () {
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();

        if (elementTop < windowBottom - 100) {
          $(this).addClass('visible');
        }
      });
    }

    fadeOnScroll(); // Trigger on load
    $(window).on('scroll', fadeOnScroll) // Trigger on scroll
  })



  $(document).ready(function () {
    // Fade-in scroll effect
    function fadeOnScroll() {
      $('.fade-on-scroll').each(function () {
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();

        if (elementTop < windowBottom - 100) {
          $(this).addClass('visible');
        }
      });
    }

    fadeOnScroll(); // Trigger on load
    $(window).on('scroll', fadeOnScroll); // Trigger on scroll
  });



