const toggleButton = document.getElementById("Realtoggle");
const CrossButton = document.getElementById("cross");
const Main = document.getElementById("MenuMobile");
const features = document.getElementById("featuresBtn");
const company = document.getElementById("companyBtn");
 

toggleButton.addEventListener('click', function () {
    Main.classList.add("mobile-nav");
    Main.classList.remove("nav");
    toggleButton.classList.add("nav");
})


CrossButton.addEventListener('click', function () {
    Main.classList.remove("mobile-nav");
    Main.classList.add("nav");
    toggleButton.classList.remove("nav");

})

features.addEventListener('click', function () {
    const list1 = document.getElementById("Dropdown1");
    const arrow1 = document.getElementById("downarrow1");
    if(list1.classList.contains("clickDropdown")){
        list1.classList.remove("clickDropdown");
        arrow1.classList.add("rotate");
    }
    else{
        list1.classList.add("clickDropdown");
        arrow1.classList.remove("rotate");
    }
})

company.addEventListener('click', function () {
    const list2 = document.getElementById("Dropdown2");
    const arrow2 = document.getElementById("downarrow2");

    if(list2.classList.contains("clickDropdown")){
        list2.classList.remove("clickDropdown");
        arrow2.classList.add("rotate");
    }
    else{
        list2.classList.add("clickDropdown");
        arrow2.classList.remove("rotate");
    }
})

