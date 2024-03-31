document.addEventListener("DOMContentLoaded", function () {
  // button hover effect
  const btnContainer = document.querySelector(".btn-container");
  const btnPrimary = document.querySelectorAll(".btn-primary");
  const btnBackground = document.querySelectorAll(".btn-background");

  for (let btnP of btnPrimary) {
    btnP.addEventListener("mouseenter", function () {
      for (let btnB of btnBackground) {
        btnB.classList.add("btn-background-hover");
      }
    });
  }

  for (let btnP of btnPrimary) {
    btnP.addEventListener("mouseleave", function () {
      for (let btnB of btnBackground) {
        btnB.classList.remove("btn-background-hover");
      }
    });
  }

  //hamburger menu
  const hbIcon = document.querySelector(".hb-icon");
  const hbMenu = document.querySelector(".hb-menu");

  hbIcon.addEventListener("click", function () {
    hbIcon.classList.toggle("hb-icon-active");
    hbMenu.classList.toggle("hb-menu-active");
  });
});
