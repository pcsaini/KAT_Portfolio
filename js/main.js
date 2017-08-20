/**
 * Created by pcsaini on 18/8/17.
 */
/*var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});*/


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
})