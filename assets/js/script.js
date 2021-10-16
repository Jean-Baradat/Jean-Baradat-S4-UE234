// charge le code au "loading" de la window 
window.addEventListener('load', function () {
    var divSetting = document.getElementById("div-setting");
    divSetting.style.display = "none";
    var divProfile = document.getElementById("div-profile");
    divProfile.style.display = "none";
    var menuAsideMobile = document.getElementById("menu-aside-mobile");
    if (screen.width <= 480) {
        menuAsideMobile.style.left = "-15rem";
    }
});

// fonction d'affichage et désaffichage de la DivSetting 
function displayDivSetting() {
    var divSetting = document.getElementById("div-setting");
    var divProfile = document.getElementById("div-profile");

    if (divSetting.style.display === "none"){
        divSetting.style.display = "block";
        if (screen.width <= 800) {
            divSetting.style.display = "flex";
        }
    }
    else{
        divSetting.style.display = "none";
    }
    if (divProfile.style.display === "block"  || divProfile.style.display === "flex"){
        divProfile.style.display = "none";
    }
}

// fonction d'affichage et désaffichage de la DivProfile 
function displayDivProfile() {
    var divProfile = document.getElementById("div-profile");
    var divSetting = document.getElementById("div-setting");

    if (divProfile.style.display === "none"){
        divProfile.style.display = "block";
        if (screen.width <= 800) {
            divProfile.style.display = "flex";
        }
    }
    else{
        divProfile.style.display = "none";
    }
    if (divSetting.style.display === "block" || divSetting.style.display === "flex"){
        divSetting.style.display = "none";
    }
}
function menu() {
    var menuAsideMobile = document.getElementById("menu-aside-mobile");
    if (menuAsideMobile.style.left == "-15rem"){
        menuAsideMobile.style.left = "0rem";
    }
    else{
        menuAsideMobile.style.left = "-15rem";
    }
}