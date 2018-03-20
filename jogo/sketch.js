let imagemNave;
let imagemAlien;
let imagemMisisl;

let posicaoYMissil = 500;
let posicaoXMissil = 400;
let posicaoXNave;
let posicaoYNave = 500;

function preload(){
// carregando imagens
imagemNave = loadImage("imagens/Nave.png");
imagemAlien = loadImage("imagens/Alien1.png");
imagemMissil = loadImage("imagens/Missil.png");
}

function setup() {
// criando um palco
createCanvas(900, 600);
}

function draw() {
// pintar o fundo do palco
background(100);

posicaoYMissil = posicaoYMissil - 1;

posicaoXNave = mouseX-imagemNave.width/2;
//desenhar a nave
image(imagemNave, posicaoXNave, posicaoYNave);
//desenhando o alien
image(imagemAlien, 400, 200);
//desenhando o missil na posicao x =400 e y = 500
image(imagemMissil, posicaoXMissil, posicaoYMissil);

}

function mousePressed(){
posicaoYMissil = posicaoYNave;
posicaoXMissil = posicaoXNave;
}