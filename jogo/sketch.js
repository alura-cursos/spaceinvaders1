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
image(imagemNave, mouseX-imagemNave.width/2, 500);
//desenhando o alien
image(imagemAlien, 400, 200);

}