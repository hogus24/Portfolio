(function ($) {
  $(document).ready(function () {
    var topPath = document.querySelector(".top_wrap path");
    var pathLength = topPath.getTotalLength();
    topPath.style.transition = topPath.style.WebkitTransition = "none";
    topPath.style.strokeDasharray = pathLength + " " + pathLength;
    topPath.style.strokeDashoffset = pathLength;
    topPath.getBoundingClientRect();
    topPath.style.transition = topPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      topPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".top_wrap").addClass("active");
      } else {
        jQuery(".top_wrap").removeClass("active");
      }
    });
    jQuery(".top_wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
