 
function resize() {

    $(document).ready(function () {

        var menu = $('.menu');
        var color = $('.bgcolor');
        var navlinks = $('.navlinks');
        var logocolor = $('.logocolor');
        var origOffsetY = menu.scrollTop() + 30;

    if (document.documentElement.clientWidth < 768) {
            $('.menu').addClass('sticky');
            $('.bgcolor').addClass('whitening');
            $('.navlinks').addClass('grayening');
            $('.logocolor').addClass('darkening');
    }

    else {
            function scroll() {
                if ($(window).scrollTop() >= origOffsetY) {
                    $('.menu').addClass('sticky');
                    $('.bgcolor').addClass('whitening');
                    $('.navlinks').addClass('grayening');
                    $('.logocolor').addClass('darkening');
                } else {
                    $('.menu').removeClass('sticky');
                    $('.bgcolor').removeClass('whitening');
                    $('.navlinks').removeClass('grayening');
                    $('.logocolor').removeClass('darkening');

                }
            }

            document.onscroll = scroll;
        
        }

    });
}