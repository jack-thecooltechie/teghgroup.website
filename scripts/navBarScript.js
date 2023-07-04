
var navBarOpenButton = document.getElementById("hamburger-icon");
var navBarCloseButton = document.getElementById("close-icon");
var closedMenuLayout = document.getElementById("menu-bar-closed-mobile");

var productText = document.getElementById("product-text");
var fmegText = document.getElementById('fmeg-text');

var products = document.getElementsByClassName('sub-menu-mobile')[0];
var fmegProducts = document.getElementsByClassName('sub-sub-menu-mobile')[0];

var navigationBar = document.getElementById("menu-bar-open-mobile");


var arePVisible = false;
var areFMVisible = false;

console.log(navigationBar);

navBarOpenButton.addEventListener('click', function(){
    console.log("Nav Bar Open Click Listener");
    navigationBar.classList.remove('nav-bar-closed');
    navigationBar.classList.add('nav-bar-show');
    closedMenuLayout.style.display = "none";
});

navBarCloseButton.addEventListener('click', function(){
    console.log("Nav Bar Open Click Listener");
    navigationBar.classList.remove('nav-bar-show');
    navigationBar.classList.add('nav-bar-closed');
    closedMenuLayout.style.display = "flex";
})


productText.addEventListener('click', function(){
    console.log('product text clicked');

    

    if(!arePVisible){
        products.style.display = "flex";
        arePVisible = true;
    } else{
        products.style.display = "none";
        arePVisible = false;
    }
})

fmegText.addEventListener('click', function(){
    console.log('fmeg text clicked');

    if(arePVisible){
        if(!areFMVisible){
            fmegProducts.style.display = "flex";
            areFMVisible = true;
        } else{
            fmegProducts.style.display = "none";
            areFMVisible = false;
        }
    }

})



// navBarCloseButton.addEventListener('click', function(){
//     console.log("Nav Bar Close Click Listener");
//     navigationBar.classList.remove('nav-bar-show');
//     navigationBar.classList.add('nav-bar-closed');
//     closedMenuLayout.style.display = "flex";
// })




//Make the sub menu item visible on click. Also add an icon to show that it is a drop down




