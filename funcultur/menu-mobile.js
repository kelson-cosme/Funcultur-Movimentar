const botaoMenu = document.getElementById("mobileMenu");
const listaMenu = document.getElementById("listaMenu");


function aparecerMenu(){
    if(listaMenu.className == ""){
        listaMenu.classList.add("active")

    } else {
        listaMenu.classList.remove("active")
    }
}

botaoMenu.addEventListener("click", aparecerMenu)