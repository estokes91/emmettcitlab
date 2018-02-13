var menu = document.getElementById("menu");

document.getElementById("Open").addEventListener("click", function(){
    menu.style.left = "0px";
})

document.getElementById("Close").addEventListener("click", function(){
    menu.style.left = "-110px";
})

document.getElementById("MakeBG").addEventListener("click", function(){
    zoombg = document.getElementById('zoom').style.backgroundImage
    document.getElementById('bg').style.backgroundImage = zoombg;
})

document.getElementById("Reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage="url()";
})

document.getElementById("ShowApp").addEventListener("click", function(){
    document.getElementById("app1").style.display="block";
})

document.getElementById("HideApp").addEventListener("click", function(){
    document.getElementById("app1").style.display="none";
})






