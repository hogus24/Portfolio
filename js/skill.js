$(function () {
  const progressBox = $(".progress-bar");
  const progressOst = $(".my_skills").offset().top - 800;
  let isAni = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst && !isAni) {
      progressAni();
    }
  });

  function progressAni() {
    progressBox.each(function () {
      let $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      progressBar.animate({ width: progressRate + "%" }, 2500);

      let text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
            },
          }
        );
      };
      text();
    });
  }
});
