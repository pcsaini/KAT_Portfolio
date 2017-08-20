/**
 * Created by pcsaini on 18/8/17.
 */
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('ul.nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('ul.nav li').removeClass("active");
            currentLink.addClass("active");
            console.log(refElement);
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

$(function() {
    var owl = $('.owl-carousel').owlCarousel({
        loop	:true,
        margin	:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    /* animate filter */
    var owlAnimateFilter = function(even) {
        $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
    }

    $('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        owl.owlFilter(filter_data, function(_owl) {
            $(_owl).find('.item').each(owlAnimateFilter);
        });
    })
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(23.157749, 72.669928),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID,

}
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map
    });

}

