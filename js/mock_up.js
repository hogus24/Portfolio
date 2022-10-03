const hiddens = document.querySelectorAll(".hidden");
const thumbs = document.querySelectorAll(".hidden > img");
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = document.querySelector(".hidden > img");
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = tgH - tgThumbH + "px";
  });
  hidden.addEventListener("mouseout", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = document.querySelector(".hidden > img");
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = tgH - tgThumbH + "px";
  });
});
