const hiddens = document.querySelectorAll(".hidden");
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    // offsetHeight -> .hidden 의 높이
    const tgThumb = tg.childNodes[1];
    // childNodes[] = 자식요소 선택자, 자식의 인덱스 번호
    const tgThumbH = tgThumb.offsetHeight;
    // tgThumbH -> .hidden 의 자식요소, img 의 높이
    tgThumb.style.top = tgH - tgThumbH + "px";
  });
  hidden.addEventListener("mouseout", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    console.log(tgH);
    // tgH -> .hidden 의 자식요소, img 의 높이
    const tgThumb = tg.parentNode;
    // parentNode = 부모요소 선택자
    const tgThumbH = tgThumb.offsetHeight;
    console.log(tgThumbH);
    // tgThumbH -> .hidden 의 높이
    tg.style.top = 0 + "px";
  });
});
