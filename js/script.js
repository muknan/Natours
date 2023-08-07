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
