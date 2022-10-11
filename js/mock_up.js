const hiddens = document.querySelectorAll(".hidden");
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.childNodes[1];
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = tgH - tgThumbH + "px";
  });
  hidden.addEventListener("mouseout", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.parentNode;
    const tgThumbH = tgThumb.offsetHeight;
    tg.style.top = 0 + "px";
  });
});
