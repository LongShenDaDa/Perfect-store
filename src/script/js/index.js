// 首页JS代码

// 轮播图

$(function() {
    var zuo = $('ol .zuo, .lbt_left');
    var you = $('ol .you, .lbt_right');
    var bigLbt = $('.big_lbt');
    var zColor = $('.z_color');
    var yColor = $('.y_color');
    var bl2 = -1920;

    // 圆点点击切换与箭头点击
    zuo.on('click', function() {
        bigLbt.animate({ 'left': '0' }, 300);
        zColor.css('background-color', '#e22430');
        yColor.css('background-color', '#eff0f2');
    });
    you.on('click', function() {
        bigLbt.animate({ 'left': '-1920px' }, 300);
        zColor.css('background-color', '#eff0f2');
        yColor.css('background-color', '#e22430');
    });
    $('.jiantou span').on('click', function() {
        bigLbt.animate({ 'left': bl2 }, 300);
        if (bl2 == -1920) {
            bl2 = 0;
            zColor.css('background-color', '#eff0f2');
            yColor.css('background-color', '#e22430');
        } else {
            bl2 = -1920;
            zColor.css('background-color', '#e22430');
            yColor.css('background-color', '#eff0f2');
        }
    })

    // 自动切换
    var timer;
    timer = setInterval(function() {
        bigLbt.animate({ 'left': bl2 }, 500);
        if (bl2 == -1920) {
            bl2 = 0;
            zColor.css('background-color', '#eff0f2');
            yColor.css('background-color', '#e22430');
        } else {
            bl2 = -1920;
            zColor.css('background-color', '#e22430');
            yColor.css('background-color', '#eff0f2');
        }
    }, 2000);

    // 添加鼠标hover事件,阻止自动轮播;
    $('.jiantou span').hover(function() { // 鼠标hover时的事件
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            bigLbt.animate({ 'left': bl2 }, 500);
            if (bl2 == -1920) {
                bl2 = 0;
                zColor.css('background-color', '#eff0f2');
                yColor.css('background-color', '#e22430');
            } else {
                bl2 = -1920;
                zColor.css('background-color', '#e22430');
                yColor.css('background-color', '#eff0f2');
            }
        }, 2000);
    });

});