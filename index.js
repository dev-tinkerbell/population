const openBtn = document.querySelector("header button.open");
const closeBtn = document.querySelector("header button.close");
const menu = document.querySelector("header nav");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.style.overflow = "";
});
