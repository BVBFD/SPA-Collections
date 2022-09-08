const menuToggleBtn = document.querySelector(".header .menuIcon");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menuIcon");

const menuToggleBtnClick = () => {
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
};
