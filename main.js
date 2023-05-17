function openNavbar() {
    
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu-open").style.display = "none";
    document.getElementById("menu-close").style.display = "block";
}

function closeNavbar() {
    document.getElementById("menu-close").style.display = "none";
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu").style.display = "none";
}