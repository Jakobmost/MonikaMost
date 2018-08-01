$(document).ready(function () {

    $('.body').hide().fadeIn(3000);


    $('.img2, .swipeText, .button5').hide().fadeIn(5000);

    setTimeout(swipePulse, 5000);

    function swipePulse() {
        for (var i = 0; i < 10; i++) {
            $(".img2, .swipeText, .button5").fadeOut(1000).fadeIn(1000).delay(1000);
        }
    }

    $('.img2').click(function () {
        $('.body, .img2').slideUp(1500);
        $('.arrowHide').fadeOut(1000);
        
       $('.mainSite').css("visibility","visible");

    });

});
