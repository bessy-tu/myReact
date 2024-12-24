$(function () {
    var mdwBtn = $('.modalBtn'),  //開啟彈出視窗按鈕
        overlayOpacity = 0.7,     //背景透明度
        fadeTime = 500;


    mdwBtn.on('click', function (e) {
        e.preventDefault();

        var setMdw = $(this),
            setHref = setMdw.attr('href'),
            setSource = $(setHref).html(),
            wdHeight = $(window).height();


        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div>   <div id="contWrap"> </div> </div>')

        $('#').load(setHerf);  //取得外部檔案內容

        // 將產生的彈出視窗與遮罩元素，透明度為0
        $('#mdOverlay.#mdWindow').css({ display: 'block', opacity: '0' });
        // 將遮罩的元素高度設定為視窗高度並但入動畫顯示
        $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);
        // 彈出視窗也可以淡入動畫顯示
        $('mdWindow').stop().animate({ opacity: '1' }, fadeTime);

        $(window).on('resize', function () {
            // 取得視窗高度
            var adjHeight = $(window).height();
            // 重新設定遮罩元素樣式
            $('#mdOverlay').css({ height: adjHeight });
        });

        // 關閉彈出視窗或按下關閉按鈕時
        $('#mdOverlay,mdClose').on('click', function () {
            // 淡出彈出視窗與遮罩元素
            $('#mdWindow,#mdOverlay').stop().animate({ opacity: '0' }, fadeTime, function () {
                // 移除元素
                $('#mdOverlay,#mdWindow').remove();
            });
        });











    });



});