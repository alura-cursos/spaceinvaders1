let imagemNave;
let imagemAlien;
let imagemMissil;
let imagensAlien = new Array();


let posicoesMisseis = new Array();
let aliens = new Array();

let posicaoNave;
let posicaoAlien;

let alienVivo = true;
let estaTocando;

let velocidadeAlien = 2;

//preparando o ambiente de trabalho
//carrengado as fantasias do nosso jogo
function preload() {
    // carregando imagens
    imagemNave = loadImage("imagens/Nave.png");
    imagemAlien = loadImage("imagens/Alien1.png");
    imagemMissil = loadImage("imagens/Missil.png");

    imagensAlien.push(loadImage("imagens/Alien2.png"));
    imagensAlien.push(loadImage("imagens/Alien3.png"));
}

//Quando meu jogo começa
function setup() {
    // criando um palco com 900 de largura e 600 de altura
    createCanvas(900, 600);
    posicaoNave = createVector(400, 500);
    posicaoAlien = createVector(350, 200);

    for (let numeroAliens = 0; numeroAliens < 6; numeroAliens = numeroAliens + 1) {
        //faça algo
        let numeroFantasia = Math.floor(random(2));
        aliens.push(numeroFantasia);
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
function mousePressed() {
    posicoesMisseis.push(createVector(mouseX - imagemMissil.width / 2, posicaoNave.y));

}

function verificaColisao() {
    //para cada missil dentro do jogo
    for (let posicao of posicoesMisseis) {
        //verficar a colisao com todos os aliens
        for(let i=0 ; i<6 ; i = i+1){
            let posicaoAlienDaLista = createVector(150*i);
            //se o missil está para esquerda OU (||)  para direita OU  para baixo OU para cima
            if (posicao.x + imagemMissil.width < posicaoAlienDaLista.x ||
            posicao.x > posicaoAlienDaLista.x + imagemAlien.width ||
            posicao.y > posicaoAlienDaLista.y + imagemAlien.height ||
            posicao.y + imagemMissil.height < posicaoAlienDaLista.y
            ) {
            //o missil não está tocando o alien

            } else {
            //o alien está morto
                aliens[i] = -1;
            }
        }
    }
}

function desenhaAlien() {
    //se o alien esta vivo, eu devo desenhar ele
    if (alienVivo == true) {
        //desenhando o alien
        image(imagemAlien, posicaoAlien.x, posicaoAlien.y);
    }

    for (let i = 0; i < 6; i = i + 1) {
        let numeroFantasia = aliens[i];
        //se o numero da fantasia for diferente(!=) de -1 
        if(numeroFantasia != -1){
            //desenha o alien
            image(imagensAlien[numeroFantasia], 150 * i, 0);
        }
    }
}


function movimentarAlien() {
    posicaoAlien.x = posicaoAlien.x + velocidadeAlien;
    if (posicaoAlien.x + imagemAlien.width > 900 || posicaoAlien.x < 0) {
        velocidadeAlien = velocidadeAlien * -1;
    }
}

function desenhaMisseis() {

    //para cada item da minha lista -> desenhar aquele ator
    for (let posicao of posicoesMisseis) {
        image(imagemMissil, posicao.x, posicao.y);
    }

}

function movimentaMisseis() {
    //para cada posicao dentro da lista de posições -> mover o míssil para cima
    for (let posicao of posicoesMisseis) {
        posicao.y = posicao.y - 1;
    }
}