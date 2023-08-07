//Make mobile navigation work
const btnNavEl = document.querySelector(".navigation__checkbox");

function uncheckBox() {
  if (btnNavEl.checked) {
    btnNavEl.checked = false;
  }
}

const navEl = document.querySelector(".navigation__list");

navEl.addEventListener("click", function () {
  uncheckBox();
});

const popEl = document.querySelector(".popup__close");

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

    if (href !== "#popup" && href !== "#section-tours") {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   console.log("Test");
    //   e.preventDefault();
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }
  });
});
