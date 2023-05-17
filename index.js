const menu = document.getElementsByClassName("nav");
const toggleButton = document.getElementById("Realtoggle");
toggleButton.addEventListener('click',function(){
    menu[0].classList.toggle("mobile-nav");
    menu[0].classList.remove("nav");
})