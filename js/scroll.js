let win = $(window),
  sideNav = $(".sideNav li"),
  gnb = $(".gnb li"),
  sections = $(".section"),
  contents = $(".content");

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
      $(".gnb li").eq(i).addClass("on").siblings().removeClass("on");
      sideNav.eq(i).addClass("on").siblings().removeClass("on");
      contents.eq(i).addClass("on").siblings().removeClass("on");
    }
  });
  sct > 400 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
});
