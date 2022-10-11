$(function () {
  var header = $(".all_header");
  var headerOST = header.offset().top;

  $(window).scroll(function () {
    var currentSCT = $(this).scrollTop();
    if (headerOST < currentSCT) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});
