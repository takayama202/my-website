'use strict';

$(function () {

  // ハンバーガーメニュー
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass("open");
    $('.menu-content').toggleClass("open");
  });

  // TOTOPボタン
  let pageTop = $('#pagetop a');
  $(pageTop).hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

  // フィルタリング
  $(function () {
    $('#list li').not('.is-active').hide();

    $("#menu-buttons button").click(function () {
      let target = $(this).attr("value");

      $("#list li").each(function () {
        $(this).animate({ "opacity": 0 }, 300, function () {
          $(this).hide();

          if ($(this).hasClass(target) || target == "all") {
            $(this).show();
            $(this).animate({ "opacity": 1 }, 300);
          }
        });
      });
    });
  });

  // パララックス
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });

  // フォームバリデーション

  // 

});
