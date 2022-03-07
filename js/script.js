$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('#Header').addClass('shrink');
        }
        else {
            $('#Header').removeClass('shrink');
        }

        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    $('.slider.center').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '5%',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '5%'
                }
            }
        ]
    });
});