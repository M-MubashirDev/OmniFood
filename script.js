"use strict";
const header = document.querySelector(".header");
const navUl = document.querySelector(".nav-ul");
const heroSection = document.querySelector(".hero");
const btnDiv = document.querySelector(".btn-div");
const mainListCont = document.querySelectorAll(".pricing-div-list");
header.style.backgroundColor = "white";
let curntli = 1;
header.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-li")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navUl.classList.toggle("navlinkResp");
  }
});
//stickey bar
const headerHeight = header.getBoundingClientRect().height;
const navFun = function (objObserver) {
  console.log(objObserver[0]);
  if (!objObserver[0].isIntersecting) {
    header.classList.add("sticky");
    // console.log(";;;;");
  } else {
    header.classList.remove("sticky");
  }
};
const observer = new IntersectionObserver(navFun, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
observer.observe(heroSection);
btnDiv.addEventListener("click", function (e) {
  const targetEle = e.target;
  const id = targetEle.getAttribute("id");
  if (targetEle.classList.contains("btn_price")) {
    curntli = 1;
    mainListCont.forEach((val) => {
      if (val.classList.contains(id)) {
        val.classList.remove("hidden");
      } else {
        val.classList.add("hidden");
      }
    });
  }
});
const nextArrow = document.querySelector(".next-arrow");
const prevArrow = document.querySelector(".prev-arrow");
const smallDivs = document.querySelectorAll(".small-div");
// console.log(nextArrow, smallDivs);
const nextSmalldiv = function () {
  console.log(this);
  smallDivs.forEach((val) => {
    // console.log(val, curntli);
    if (val.getAttribute("id") == `no--${this}` && smallDivs.length >= this) {
      val.classList.remove("hidden");
    } else if (smallDivs.length >= this && this) {
      val.classList.add("hidden");
    }
  });
};
nextArrow.addEventListener("click", nextSmalldiv.bind((curntli = curntli + 1)));

prevArrow.addEventListener(
  "click",
  nextSmalldiv.bind((curntli = curntli > 0 ? curntli - 1 : curntli))
);
document.querySelector(".tab-button").addEventListener("click", function () {
  navUl.classList.toggle("navlinkResp");
});
//...........
const sections = document.querySelectorAll("section");
console.log(sections);
const slowApperanceFun = function (entries, observer) {
  console.log(entries);
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("slowapperance");
  observer.unobserve(entry.target);
};
const observerSectionAnimation = new IntersectionObserver(slowApperanceFun, {
  root: null,
  threshold: 0.15,
  rootMargin: "90px",
});
sections.forEach((val) => {
  observerSectionAnimation.observe(val);
  val.classList.add("slowapperance");
});
// const sets = setTimeout(
//   (country, date) => {
//     console.log(`${country} got independece  in ${date}`);
//   },
//   5000,
//   "pakistan",
//   1947
// );
// let totalnum = 120;
// setInterval(() => {
//   let min = totalnum / 60;
//   let sec = totalnum % 60;
//   console.log(
//     String(Math.trunc(min)).padStart(2, 0),
//     ":",
//     String(Math.trunc(sec)).padStart(2, 0)
//   );
//   // totalnum--;
//   console.log(totalnum);
// }, 1000);
