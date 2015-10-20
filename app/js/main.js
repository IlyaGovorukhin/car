$(document).ready(function(){
    var slider = $('.page_bxslider').bxSlider({
        mode: 'fade',
        pagerCustom: '#container_bxpager'


    });
    var slider2 = $('#container_bxpager').bxSlider({
        slideWidth: 300,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 3,
        slideMargin: 10,
        mode: 'vertical',
        controls: false

    });


    JumpToSlide = function (slideNumber) {

        var slide2 = slideNumber - 1;

        slider2.goToSlide(slide2);

        var slide = slideNumber - 1;

        slider.goToSlide(slide);


    };





    $(function ($) {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    });


    $(function () {
        $('.page_date-data-block').datepicker($.extend({
                inline: true
            },
            $.datepicker.regional['ru']
        ));
    });


});
