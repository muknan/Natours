//Make mobile navigation work
const btnNavEl = document.querySelector(".navigation__checkbox");

function uncheckBox() {
  if (btnNavEl.checked) {
    btnNavEl.checked = false;
  }
}

// Popup close on clicking grey area
const popParentEl = document.querySelector(".popup");
const popConEl = document.querySelector(".popup__content");

popParentEl.addEventListener(
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
