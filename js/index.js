var menulist = document.getElementById("menulist");
var menubtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu12");
menulist.style.maxHeight = "0px";

menubtn.onclick = function() {
    if(menulist.style.maxHeight == "0px") {
        menu.style.minHeight = "100vh";
        menulist.style.maxHeight = "150px";
    } else {
        menu.style.minHeight = "fit-content";
        menulist.style.maxHeight = "0px";
    }
}