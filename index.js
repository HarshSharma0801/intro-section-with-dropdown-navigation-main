const toggleButton = document.getElementById("Realtoggle");
const CrossButton = document.getElementById("cross");
const Main = document.getElementById("MenuMobile");


toggleButton.addEventListener('click',function(){ 
    Main.classList.add("mobile-nav");
    Main.classList.remove("nav");
    toggleButton.classList.add("nav");
})


CrossButton.addEventListener('click',function(){
   Main.classList.remove("mobile-nav");
   Main.classList.add("nav");
    toggleButton.classList.remove("nav");

})