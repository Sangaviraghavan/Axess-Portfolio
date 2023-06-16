$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
       $('header').removeClass('toggle');

    })
    // smooth scrolling

    $('a[href*="#"]').on('click',function (e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        )
    })
})
    function animateProgressBar(elementId, percentage) {
      var progress = document.getElementById(elementId);
      var width = 0;
      var animation = setInterval(frame, 10);
      
      function frame() {
        if (width >= percentage) {
          clearInterval(animation);
        } else {
          width++;
          progress.style.width = width + "%";
        }
      }
    }
    
    animateProgressBar("html-progress", 80); // Set HTML skill percentage
    animateProgressBar("css-progress", 60); // Set CSS skill percentage
    animateProgressBar("bootstrap-progress", 50); // Set JavaScript skill percentage
    animateProgressBar("js-progress", 70); // Set JavaScript skill percentage
    animateProgressBar("jquery-progress",50); // Set JavaScript skill percentage
    animateProgressBar("react-progress", 80); // Set JavaScript skill percentage