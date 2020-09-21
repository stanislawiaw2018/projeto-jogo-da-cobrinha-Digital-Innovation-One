//VARIAVEIS
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho dos quadros que forma o tabuleiro
let = snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
//Resposavel pela criação e construção do background do tabuleiro do jogo
function createBG() {
    context.fillStyle = "lightgreen";
    //responsavel por desenhar o tabuleiro
    context.fillRect(0,0,16 * box, 16 * box);
}

//Responsavel pela criação e redenrização da cobrinha em tela
function createSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box , box);
    }
}

createBG();
createSnake();