
const wall_img = document.querySelectorAll(".wall_img");
const unact = document.querySelectorAll(".unact");
const visual = document.querySelectorAll(".unshow");

function acting() {
  let windowHeightGet = window.innerHeight / 1.3;
  unact.forEach(items => {
    let getoffSet = items.getBoundingClientRect().top;
    if (windowHeightGet > getoffSet) {
      items.classList.remove("unact");
      items.classList.add("acting");
    }
  });
}

window.addEventListener("scroll", () => {
  acting();

  let windowScroll = window.scrollY / 4;
  wall_img.forEach(imgs => {
    imgs.style.transform = `translateY(${-windowScroll}px)`;
  });

})

window.onload = () => {
  acting();
};

setTimeout(function () {
  visual.forEach(images => {
    images.classList.add("active");
  });
}, 300)
