const toggleMenu = document.getElementById("toggle-icon");
const navBar = document.getElementById("nav-bar");
toggleMenu.addEventListener("click",()=>{
    navBar.classList.toggle("show-desktop");
})
