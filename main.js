var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navbar");
var header2 = document.querySelector(".header-2")

menu.addEventListener('click',() => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    if(window.scrollY>150){
        header2.classList.add("active");
    }else{
        header2.classList.remove("active");
    }
}