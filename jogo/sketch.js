let imagemNave;
let imagemAlien;
let imagemMissil;


let posicoesMisseis = new Array();
let posicoesAliens = new Array();

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
    posicaoNave = createVector(400 , 500);
    posicaoAlien = createVector(350, 200);

    for(let numeroAliens = 0; numeroAliens < 6 ; numeroAliens = numeroAliens+1 ){
        //faça algo
        posicoesAliens.push(createVector(numeroAliens * 150,0));
    }
  
}

//desenhando nosso atores - igual ao bloco "sempre" do scracth
function draw() {
    // pintar o fundo do palco de cinza
    background(100);
    movimentaMisseis();
    //centralizando a posição da nave
    posicaoNave.x = mouseX - imagemNave.width / 2;
    //desenhar a nave
    image(imagemNave, posicaoNave.x, posicaoNave.y);

    verificaColisao();

    movimentarAlien();
    desenhaAlien();
    desenhaMisseis();

}
//quando o mouse for pressionado
function mousePressed(){
    posicoesMisseis.push(createVector(mouseX - imagemMissil.width / 2, posicaoNave.y ));

}

function verificaColisao(){
    
    for(let posicao of posicoesMisseis){
        //se o missil está para esquerda OU (||)  para direita OU  para baixo OU para cima
        if(posicao.x + imagemMissil.width < posicaoAlien.x ||
            posicao.x  > posicaoAlien.x + imagemAlien.width ||
            posicao.y > posicaoAlien.y + imagemAlien.height ||
            posicao.y +  imagemMissil.height < posicaoAlien.y
        ){
         //o missil não está tocando o alien
          
        }else{
            //o alien está morto
            alienVivo = false
        }
    }
}

function desenhaAlien(){
    //se o alien esta vivo, eu devo desenhar ele
    if(alienVivo == true){
        //desenhando o alien
        image(imagemAlien, posicaoAlien.x, posicaoAlien.y);
    }

    for(let posicao of posicoesAliens){
        image(imagemAlien, posicao.x, posicao.y);
    }
}


function movimentarAlien(){
    posicaoAlien.x = posicaoAlien.x + velocidadeAlien;
    if(posicaoAlien.x + imagemAlien.width > 900 || posicaoAlien.x < 0){
        velocidadeAlien = velocidadeAlien * -1;
    }
}

function desenhaMisseis(){

     //para cada item da minha lista -> desenhar aquele ator
     for(let posicao of posicoesMisseis){
         image(imagemMissil, posicao.x, posicao.y);
     }
    
}

function movimentaMisseis(){
    //para cada posicao dentro da lista de posições -> mover o míssil para cima
    for(let posicao of posicoesMisseis){
        posicao.y = posicao.y -1;
    }
}