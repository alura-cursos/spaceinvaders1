let imagemNave;
let imagemAlien;
let imagemMissil;

let posicaoYMissil = 500;
let posicaoXMissil = 400;
let posicaoXNave;
let posicaoYNave = 500;

//preparando o ambiente de trabalho
//carrengado as fantasias do nosso jogo
function preload(){
    // carregando imagens
    imagemNave = loadImage("imagens/Nave.png");
    imagemAlien = loadImage("imagens/Alien1.png");
    imagemMissil = loadImage("imagens/Missil.png");
}

//"Ao clicar na bandeira verder"
function setup() {
    // criando um palco com 900 de largura e 600 de altura
    createCanvas(900, 600);
}

//desenhando nosso atores - igual ao bloco "sempre" do scracth
function draw() {
    // pintar o fundo do palco de cinza
    background(100);
    //movendo o míssil para cima
    posicaoYMissil = posicaoYMissil - 1;
    //centralizando a posição da nave
    posicaoXNave = mouseX - imagemNave.width / 2;
    //desenhar a nave
    image(imagemNave, posicaoXNave, posicaoYNave);
    //desenhando o alien
    image(imagemAlien, 400, 200);
    //desenhando o missil
    image(imagemMissil, posicaoXMissil, posicaoYMissil);

}
//quando o mouse for pressionado
function mousePressed(){
    posicaoYMissil = posicaoYNave;
    posicaoXMissil = mouseX - imagemMissil.width / 2;
}