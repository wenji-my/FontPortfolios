$(function () {
    var back_to_top = $('.scrollUp');
    $(this).scroll(function () {
        //判断滚动条距离顶部的位置是否大于200
        ( $(this).scrollTop() > 200 ) ? back_to_top.addClass('cd-is-visible') : back_to_top.removeClass('cd-is-visible');
    });
    back_to_top.click(function () {
        $('html, body').animate({scrollTop: 0}, 300);
    });
    var nav = $('.nav');
    var nav_a = nav.find('a');
    for (var i = 0; i < nav_a.length; i++) {
        var a = $(nav_a[i]);
        a.hover(function () {
            $(this).removeClass('font-effect-fire');
            $(this).addClass('font-effect-neon');
        }, function () {
            $(this).removeClass('font-effect-neon');
            $(this).addClass('font-effect-fire');
        });
    }
});

// $(function () {
//
// })