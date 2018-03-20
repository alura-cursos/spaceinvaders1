let imagemNave;
let imagemAlien;

function preload(){
// carregando imagens
imagemNave = loadImage("imagens/Nave.png");
imagemAlien = loadImage("imagens/Alien1.png");
}

function setup() {
// criando um palco
createCanvas(900, 600);
}

function draw() {
// pintar o fundo do palco
background(100);

//desenhar a nave
image(imagemNave, 400, 500);
image(imagemAlien, 400, 200);

}