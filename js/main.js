// 벽 이미지 움직임
const wall_img = document.querySelectorAll(".wall_img");

window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY / 4;
  let windowHeightGet = window.innerHeight / 1.5;

  wall_img.forEach(imgs => {
    imgs.style.transform = `translateY(${-windowScroll}px)`;
    let imageoffSet = imgs.getBoundingClientRect().top;
    if (windowHeightGet > imageoffSet) {
      imgs.classList.add("acting");
    }
  });
})