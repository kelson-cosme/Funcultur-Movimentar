let imagens = document.querySelectorAll(".img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let botao = document.getElementById("botao");
let srcValue = "";

for(let i= 0; i<imagens.length; i++){
    imagens[i].addEventListener("click", function(){
            srcValue = imagens[i].getAttribute("src");
            modalImg.setAttribute("src", srcValue);
            modal.classList.toggle("modal_active")
    });
}

botao.addEventListener("click", function(){
    modal.classList.toggle("modal_active");
})