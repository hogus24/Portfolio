const hiddens = document.querySelectorAll(".hidden");
// const thumbs = document.querySelectorAll(".hidden > img");
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    console.log(tgH); 
    // a 높이 308
    const tgThumb = tg.childNodes[1];
    const tgThumbH = tgThumb.offsetHeight;
    console.log(tgThumbH);
    // img 높이 2006
    tgThumb.style.top = tgH - tgThumbH + "px";
    console.log(tgThumb.style.top);
    // 변화 img 높이 : a - img = 308 - 2006 = -1698
  });
  hidden.addEventListener("mouseout", function (e) {
    e.preventDefault();
    const tg = e.target;
    console.log(tg);
    const tgH = tg.offsetHeight;
    console.log(tgH);
    // img 높이 2006
    const tgThumb = tg.parentNode;
    console.log(tgThumb);
    const tgThumbH = tgThumb.offsetHeight;
    console.log(tgThumbH);
    // a 높이 308
    tgH.style.top = - tgH + tgThumbH + "px";
    // 이미지 탑 : 
  });
});
