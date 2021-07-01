const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let tamanhoTela = fotos.clientWidth;

console.log(tamanhoTela)

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform =  `translateX(${-idx * tamanhoTela}px)`;
}

setInterval(carrossel, 3800);



