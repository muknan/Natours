//Make mobile navigation work
const btnNavEl = document.querySelector(".navigation__checkbox");

function uncheckBox() {
  if (btnNavEl.checked) {
    btnNavEl.checked = false;
  }
}

// Popup close on clicking grey area
const popEl = document.querySelector(".popup");
const popConEl = document.querySelector(".popup__content");

popEl.addEventListener(
  "click",
  function () {
    document.querySelector(".popup__close").click();
  },
  false
);
popConEl.addEventListener(
  "click",
  function (ev) {
    ev.stopPropagation();
  },
  false
);

// Navigation close on selecting an item from list
const navEl = document.querySelectorAll(".navigation__item");
navEl.forEach(function (item) {
  item.addEventListener("click", function () {
    uncheckBox();
  });
});

// const popEl = document.querySelector(".popup__close");
// const test = document.querySelector(".popup");
// popEl.addEventListener("click", function () {
//   test.style.cssText = `opacity: 0;
//   visibility: hidden;`;

//   const nextURL = "http://127.0.0.1:5500/#section-tours";
//   // This will create a new entry in the browser's history, reloading afterwards

//   window.location.href = nextURL;

//   // This will replace the current entry in the browser's history, reloading afterwards
//   window.location.assign(nextURL);

//   // This will replace the current entry in the browser's history, reloading afterwards
//   window.location.replace(nextURL);

//   // location.reload(nextURL);
// });

////////////////////////////////////////////////////////////
//Implementing smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    //Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (
      href !== "#" &&
      href.startsWith("#section") &&
      !href.endsWith("tours") &&
      !href.endsWith("book")
    ) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
