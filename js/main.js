$(document).ready(function(){
    
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
    });
    $('.review_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        arrows: true,
        fade: !0,
        cssEase: 'ease',
    });

    $(function(){	
        $('.news_desc').each(function(){
            var column = 0;
            $(this).children().each(function(){
                h = $(this).height();
                if (h > column) {
                    column = h;
                }
            });
            $(this).children().height(column);
        });
    });

});