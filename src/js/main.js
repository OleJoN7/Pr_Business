$(document).ready(function () {
    $('.main-nav li').hover(function () {
        $(this).addClass('active-nav');
        $(this).siblings().removeClass('active-nav');
    });

// Slider начало--------------------------------

    $('.dots-list .item').on('click', function () {
        var dot = $(this).index();

        $(this).addClass('active-dot');
        $(this).siblings().removeClass('active-dot');

        $('.img-container .img-wrap').hide();
        $('.img-container .img-wrap').eq(dot).fadeToggle(1000);
    });
    // -----------------------


    var dots = $(".item").index();
    console.log(dots)

    $('.img-container').on('click', function () {
        var itemImg = $('.img-container .img-wrap').filter(':visible').hide().next();
        console.log(itemImg);

        if (itemImg.length > 0) {
            itemImg.fadeIn(500);
        } else {
            $('.img-container .img-wrap').first().fadeIn(500);
        }

        console.log(dots)

        //привязывает точки к имгам именно при клике по одному блоку (с телевизором)


        if (dots > 1) {
            dots = 0;
        } else {
            console.log('jjjj')
            dots++;
        }
        $(".item").siblings().removeClass('active-dot');
        $(".item").eq(dots).addClass('active-dot');

    });

    // Slider конец-----------------------------------------

    // Scroll to subscribe section ------------------------

    $('.works-section .butn-start-now').on('click', function () {
        var subscribe = $('.subscribe-section');

        $('html,body').animate({
            scrollTop: subscribe.offset().top
        }, 1500);

    })


    // Price-section hover ----------------------------------

    $('.price-wrap > div').hover(function () {
        $(this).addClass('active-price');
        $(this).siblings().removeClass('active-price');
    });

    $('.footer-nav-list li').hover(function () {
        $(this).addClass('active-nav');
        $(this).siblings().removeClass('active-nav');
    });

    // Ajax шаблон для отправки данных (получить данные , сгруппировать , отправить)

    $('.request-form').on('submit', function (e) {
        e.preventDefault();
        var name = $('.user-name').val().trim(),
            email = $('.email-name').val().trim(),
            phone = $('.phone-name').val().trim();

        var data = {
            nameObj: name,
            emailObj: email,
            phoneObj: phone
        }
        console.log(JSON.stringify(data));

        $.ajax({
            url: '/user-page',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }, success: function (data) {
                console.log(data)   //  success - получает данные с сервера и в зависимости от результата делает определенные действия прописанные в callback
            }
        });
    });


    //Form Validation -----------------------


    $('.butn-subscribe-form').on('click', function () {

        var flag = true;
        var user_name = $('.user-form');
        var user_email = $('.email-form');

        user_name.css({
            "border-color": "#e9eaeb"
        });

        if ($('.user-form').val().trim().length < 3) {
            user_name.css({
                "border-color": "red"
            });
            flag = false;

        }

        user_email.css({
            "border-color": "#e9eaeb"
        }).val().trim();

        if ($('.email-form').val().trim().length < 3) {
            user_email.css({
                "border-color": "red"
            });
            flag = false;

        }


        return flag;


        // Более длиннй метод------------------------------------


        // if  (user_name.val().length < 3) {
        //     user_name.css({
        //         "border-color": "red"
        //     });
        //     flag = false;
        // } else if ($.trim($('.user-form').val()) == '') {
        //     user_name.css({
        //         "border-color": "red"
        //     });
        //     flag = false;
        // } else {
        //     user_name.css({
        //         "border-color": "#e9eaeb"
        //     });
        //     flag = true;
        // }
        //
        //
        // if  (user_email.val().length < 3) {
        //     user_email.css({
        //         "border-color": "red"
        //     });
        //     flag = false;
        // } else if ($.trim($('.email-form').val()) == '') {
        //     user_email.css({
        //         "border-color": "red"
        //     });
        //     flag = false;
        // } else {
        //     user_email.css({
        //         "border-color": "#e9eaeb"
        //     });
        //     flag = true;
        // }


    });

    //Active font -----------------------------

    $('.services-list .services-text').hover(function () {
        $('.services-text i').removeClass('active-font');
        $(this).find("i").addClass('active-font');
    });

    $('.social-list li').hover(function () {
        $('.social-list li i').removeClass('active-font');
        $(this).find("i").addClass('active-font');
    });

}); // конец ready