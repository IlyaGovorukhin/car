window.onload = function() {
    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() != 0) {

                $('#page_form-box1').fadeIn();

            } else {

                $('#page_form-box1').fadeOut();

            }

        });

        $('#page_form-box1').click(function() {

            $('body,html').animate({scrollTop:0},800);

        });

    });

}