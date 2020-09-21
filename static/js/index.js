let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho dos quadros que forma o tabuleiro

function createBG() {
    context.fillStyle = "lightgreen";
    //responsavel por desenhar o tabuleiro
    context.fillRect(0,0,16 * box, 16 * box);
}

createBG();