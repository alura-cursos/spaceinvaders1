let imagemNave;
let imagemAlien;
let imagemMissil;

let posicaoMissil;


let posicoesMisseis = new Array();

let posicaoNave;
let posicaoAlien;

let alienVivo = true;
let estaTocando;

let velocidadeAlien = 2;

//preparando o ambiente de trabalho
//carrengado as fantasias do nosso jogo
function preload(){
    // carregando imagens
    imagemNave = loadImage("imagens/Nave.png");
    imagemAlien = loadImage("imagens/Alien1.png");
    imagemMissil = loadImage("imagens/Missil.png");
}

//Quando meu jogo começa
function setup() {
    // criando um palco com 900 de largura e 600 de altura
    createCanvas(900, 600);
    posicaoMissil = createVector(450,500);
    posicoesMisseis.push(createVector(450, 500));
    posicoesMisseis.push(createVector(100, 500));
    posicoesMisseis.push(createVector(800,500));

    posicaoNave = createVector(400 , 500);
    posicaoAlien = createVector(350, 200);
}

//desenhando nosso atores - igual ao bloco "sempre" do scracth
function draw() {
    // pintar o fundo do palco de cinza
    background(100);
    //movendo o míssil para cima
    posicaoMissil.y = posicaoMissil.y - 1;
    //centralizando a posição da nave
    posicaoNave.x = mouseX - imagemNave.width / 2;
    //desenhar a nave
    image(imagemNave, posicaoNave.x, posicaoNave.y);

    verificaColisao();
    alienEstaVivo();
    movimentarAlien();
    desenhaAlien();
    desenhaMisseis();

}
//quando o mouse for pressionado
function mousePressed(){
    posicaoMissil.y = posicaoNave.y;
    posicaoMissil.x = mouseX - imagemMissil.width / 2;
}

function verificaColisao(){
    estaTocando = true;

    //se o missil está para esquerda OU (||)  para direita OU  para baixo OU para cima
    if(posicaoMissil.x + imagemMissil.width < posicaoAlien.x ||
        posicaoMissil.x  > posicaoAlien.x + imagemAlien.width ||
        posicaoMissil.y > posicaoAlien.y + imagemAlien.height ||
        posicaoMissil.y +  imagemMissil.height < posicaoAlien.y
    ){
        //o missil não está tocando o alien
        estaTocando = false;
    }
}

function desenhaAlien(){
    //se o alien esta vivo, eu devo desenhar ele
    if(alienVivo == true){
        //desenhando o alien
        image(imagemAlien, posicaoAlien.x, posicaoAlien.y);
    }
}

function alienEstaVivo(){
    if(estaTocando == true){
        alienVivo = false;
    }
}

function movimentarAlien(){
    posicaoAlien.x = posicaoAlien.x + velocidadeAlien;
    if(posicaoAlien.x + imagemAlien.width > 900 || posicaoAlien.x < 0){
        velocidadeAlien = velocidadeAlien * -1;
    }
}

function desenhaMisseis(){
     //desenhando o missil
     image(imagemMissil, posicaoMissil.x, posicaoMissil.y);
     //para cada item da minha lista -> desenhar aquele ator
     for(let posicao of posicoesMisseis){
         image(imagemMissil, posicao.x, posicao.y);
     }
    
}