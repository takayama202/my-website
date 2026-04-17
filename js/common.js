'use strict';

$(function () {

  // スライダー
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnFocus: false,
    prevArrow: '<img src="images/prev2.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/next2.png" class="slide-arrow next-arrow">',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // slickとlightboxを併用するための設定
  $(".slick-cloned a").removeAttr("data-lightbox");
  $(".slick-slider").on("click", ".slick-cloned a", function (e) {
    e.preventDefault();
    let href = $(this).attr("href");
    $('.slick-slide:not(.slick-cloned) a[href="' + href + '"]')
      .eq(0)
      .trigger("click");
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  $(function () {
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

});

