const toggleButton = document.getElementById("Realtoggle");
const CrossButton = document.getElementById("cross");
const Main = document.getElementById("MenuMobile");
const features = document.getElementById("featuresBtn");
const company = document.getElementById("companyBtn");
const Mfeatures = document.getElementById("MobileFeatures");
const Mcompany = document.getElementById("MobileCompany");
//for web and mobile
 

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


Mfeatures.addEventListener('click', function () {
    const list3 = document.getElementById("MDropdown1");
    const Marrow1 = document.getElementById("Marrow1");
    if(list3.classList.contains("hide")){
        list3.classList.remove("hide");
        Marrow1.classList.add("rotate");
    }
    else{
        list3.classList.add("hide");
        Marrow1.classList.remove("rotate");
    }
})


Mcompany.addEventListener('click', function () {
    const list4 = document.getElementById("MDropdown2");
    const Marrow2 = document.getElementById("Marrow2");

    if(list4.classList.contains("hide")){
        list4.classList.remove("hide");
        Marrow2.classList.add("rotate");
    }
    else{
        list4.classList.add("hide");
        Marrow2.classList.remove("rotate");
    }
})


