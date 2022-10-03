let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      // console.log(btn.dataset.src);
      // let src = btn.getAttribute("data-src");
      let src = btn.dataset.src;
      document.querySelector(".about .video-container .video").src = src;
    };
  });
