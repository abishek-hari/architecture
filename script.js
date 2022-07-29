const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

bar.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});
