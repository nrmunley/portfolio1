function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function myFunction2() {
    var element = document.getElementById("myTopnav");
   element.classList.remove("responsive");
}
