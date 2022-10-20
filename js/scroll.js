let win = $(window),
  sideNav = $(".side_nav li"),
  gnb = $(".gnb li"),
  sections = $(".section"),
  contents = $(".content"),
  moveLF = $(".move_LF"),
  moveRT = $(".move_RT");

const gnbOff = () => {
  gnb.each(() => {
    this.removeClass("on");
  });
};

gnb.click(function (e) {
  e.preventDefault();
  let tg = $(this);
  let index = tg.index();
  let content = contents.eq(index);
  let offset = content.offset().top;
  $("html,body").stop().animate({ scrollTop: offset }, 1000, "easeOutCirc");
});

sideNav.click(function (e) {
  e.preventDefault();
  let tg = $(this);
  let index = tg.index();
  let section = sections.eq(index);
  let offset = section.offset().top;
  $("html,body").stop().animate({ scrollTop: offset }, 1000, "easeOutCirc");
});

win.scroll(function () {
  let sct = win.scrollTop();
  contents.each(function (i) {
    if (sct >= contents.eq(i).offset().top - 300) {
      gnb.eq(i).addClass("on").siblings().removeClass("on");
    }
  });

  sections.each(function (i) {
    if (sct >= sections.eq(i).offset().top - 300) {
      sideNav.eq(i).addClass("on").siblings().removeClass("on");
    }
  });

  sections.each(function (i) {
    if (sct >= sections.eq(i).offset().top + 1800) {
      moveLF.eq(i).addClass("on");
      moveRT.eq(i).addClass("on");
    }
  });

  sct > 400 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
});
