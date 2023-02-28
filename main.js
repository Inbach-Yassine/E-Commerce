var Menu = document.querySelector("#navbar");
var MenuBar = document.querySelector("#MenuToggle");

MenuBar.addEventListener("click", () => {
  Menu.classList.toggle("open");
  document.getElementById("navbar").style.background = "#DFEAF2";
});
