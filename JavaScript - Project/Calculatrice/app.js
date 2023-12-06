var result = document.getElementById("display");

// Gestion des boutons de concaténation
document.getElementById("addition").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent += " +";
});

document.getElementById("soustraction").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent += " -";
});

document.getElementById("multiplication").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent += " *";
});

document.getElementById("division").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent += " /";
});

// Gestion du bouton de suppression

document.getElementById("reset").addEventListener("click", function () {
    result.textContent = "0";
});

// Gestion du bouton des decimals

document.getElementById("decimal").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent += ".";
});

// Gestion du bouton de calcul

document.getElementById("equal").addEventListener("click", function () {
    if(result.textContent == "0") return
    if(result.textContent.slice(-1) == "+" || result.textContent.slice(-1) == "-" || result.textContent.slice(-1) == "*" || result.textContent.slice(-1) == "/") return
    result.textContent = eval(result.textContent);
});

//Gestion des boutons de chiffres
var btn = document.getElementsByClassName("btn_number");

for (let b in btn){
    btn[b].addEventListener("click", function () {
        if(result.textContent == "0") result.textContent = "";
        result.textContent += btn[b].textContent;
    });
}