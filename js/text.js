(function ($) {
  $.fn.textAnimation = function (animation_speed, text_speed, animation) {
    var text,
      i = 0;
    var $this = $(this);
    text = $this.text();
    $this.css("white-space", "pre");
    $this.html("");

    var addLetter = setInterval(function () {
      $this.append(
        '<div class="text_animation" style="display: inline-block; animation: ' +
          animation +
          " " +
          animation_speed +
          'ms forwards">' +
          text[i] +
          "</div>"
      );
      i++;
      if (i == text.length) clearInterval(addLetter);
    }, text_speed);
  };
})(jQuery);

var temp = $(".slogan_animation").text();
var i = 1;

$(".slogan_animation").textAnimation(250, 50, "bounceIn");

setInterval(function () {
  i %= 4;
  $(".slogan_animation").html(temp);
  switch (i) {
    case 1:
      $(".slogan_animation").textAnimation(250, 300, "slideDown");
      break;
  }
  i++;
}, 1000 + 50 * temp.length + 250);
