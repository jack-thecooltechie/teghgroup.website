
var navBarOpenButton = document.getElementById("hamburger-icon");
var closedMenuLayout = document.getElementById("menu-bar-closed-mobile");

var navigationBar = document.getElementById("menu-bar-open-mobile");

console.log(navigationBar);

navBarOpenButton.addEventListener('click', function(){
    console.log("Nav Bar Open Click Listener");
    navigationBar.classList.remove('nav-bar-closed');
    navigationBar.classList.add('nav-bar-show');
    closedMenuLayout.style.display = "none";
});

// navBarCloseButton.addEventListener('click', function(){
//     console.log("Nav Bar Close Click Listener");
//     navigationBar.classList.remove('nav-bar-show');
//     navigationBar.classList.add('nav-bar-closed');
//     closedMenuLayout.style.display = "flex";
// })





