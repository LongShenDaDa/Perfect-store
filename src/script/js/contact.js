// 联系我们

// 右侧轮播页
$(function() {
    var zuo = $('.zuo');
    var you = $('.you');
    var xlb = $('.xiaolunbo')
    zuo.on('click', function() {
        xlb.animate({ 'left': '0' }, 500);
        zuo.css('background-color', '#c20813');
        you.css('background-color', '#e0e0e0');
    });
    you.on('click', function() {
        xlb.animate({ 'left': '-240px' }, 500);
        zuo.css('background-color', '#e0e0e0');
        you.css('background-color', '#c20813');
    });

    // 自动切换
    var bl2 = -240;
    setInterval(function() {
        xlb.animate({ 'left': bl2 }, 500);
        if (bl2 == -240) {
            bl2 = 0;
            zuo.css('background-color', '#e0e0e0');
            you.css('background-color', '#c20813');
        } else {
            bl2 = -240;
            zuo.css('background-color', '#c20813');
            you.css('background-color', '#e0e0e0');
        }
    }, 3000);

});