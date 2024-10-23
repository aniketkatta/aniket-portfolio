export function toggleMenu() {
  console.log("toggleMenu function called");
  let toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
