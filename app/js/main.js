$(document).ready(function(){
    $('.page_bxslider').bxSlider({
        mode: 'fade',
        pagerCustom: '#container_bxpager'
    })
    $('.page_slider-img-next').click(function(){
        $('.bx-prev').click();
    });
    $('.page_slider-img-prev').click(function(){
        $('.bx-next').click();
    })



})
