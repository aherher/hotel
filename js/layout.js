// 메뉴 전체 열기
const openBtn = document.querySelector(".header__btn");
const menuWrap = document.querySelector(".header__menuWrap");
const body = document.querySelector("body");

openBtn.addEventListener("click", () => {
  menuWrap.classList.add("opened");
  body.style.overflow = "hidden";
})

//닫기
const closeBtn = document.querySelector(".header__close");
closeBtn.addEventListener("click", () => {
  menuWrap.classList.remove("opened");
  body.style.overflow = "";
})


window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY;
  if (windowScroll > 50) {
    openBtn.classList.add("fixed");
  } else if (windowScroll < 50) {
    openBtn.classList.remove("fixed");
  }
})


// 서브메뉴 열기
const menu = document.querySelectorAll(".header__menu > li > a");

function remove() {
  menu.forEach(item => {
    item.closest("li").classList.remove("on");
  });
}

menu.forEach(item => {
  item.addEventListener("click", (e) => {

    let openCheck = item.closest("li").classList.contains("on");
    if (!openCheck) {
      remove();
      console.log("!23");
      item.closest("li").classList.add("on");
      e.preventDefault();
    } else if (openCheck) {
      remove();
      e.preventDefault();
    };
  });
});




// 스크롤 애니메이션
const moverWrap = document.querySelectorAll(".moverWrap")
const unMove = document.querySelectorAll(".unMove")


function doScroll() {
  let windowHeight = window.innerHeight / 1.5
  moverWrap.forEach((item) => {
    let itemTop = item.getBoundingClientRect().top
    if (windowHeight > itemTop) {
      item.classList.add("moverOn_Wrap")
    }
  })

  unMove.forEach((item) => {
    let unMoveTop = item.getBoundingClientRect().top
    if (windowHeight > unMoveTop) {
      item.classList.add("moveOn")
    }
  })

}

window.onload = () => {
  doScroll()
}

window.addEventListener("scroll", function () {
  doScroll()
})
