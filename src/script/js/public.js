// 商城主页

// 点击元素返回顶部

$(function() {
    //先将 #back-top 隐藏
    $('.xfl-btn').hide();
    //当滚动条的垂直位置距顶部 200 像素一下时，跳转链接出现，否则消失。
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('.xfl-btn').fadeIn(500);
        } else {
            $(".xfl-btn").fadeOut(500);
        }
    });

    //点击跳转链接，滚动条跳到 0 的位置，页面移动速度是1000。
    $('.xfl-btn').click(function() {
        //将当前窗口的内容区滚动高度改为 0，即顶部
        $("html,body").animate({ scrollTop: 0 }, "fast");
    });
})

// ----------------懒加载--------------------


// ----------------------模态框--------------------

// 打开模态框
$('.zc-open').click(function() { $('#mtk-bg').css({ 'display': 'block' }); })

// 关闭模态框
$('.mtk-clear').click(function() { $('#mtk-bg').css({ 'display': 'none' }); })