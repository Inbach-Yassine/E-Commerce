var Menu = document.querySelector("#navbar");
var MenuBar = document.querySelector("#MenuToggle");
var Header = document.querySelector("#header");

window.addEventListener("scroll" , (e) =>{
  if(e.target.id !== 'Menu' && e.target.id !== 'MenuBar' && e.target.id !== 'Header'){
    Menu.classList.remove("open");
}
});
MenuBar.addEventListener("click", () => {
  Menu.classList.toggle("open");
  document.getElementById("navbar").style.background = "#DFEAF2";
});
