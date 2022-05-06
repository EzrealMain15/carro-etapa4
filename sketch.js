var allPlayers;
var gameState = 0;
var playerCount = 0;

var database;
var form, player, game;

var cars = [];
var car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img, ground;

function preload(){
  track = loadImage("/images/track.jpg");
  car1_img = loadImage("/images/car1.png");
  car2_img = loadImage("/images/car2.png");
  car3_img = loadImage("/images/car3.png");
  car4_img = loadImage("/images/car4.png");
  ground = loadImage("/images/ground.png");
}


function setup(){
  canvasW = displayWidth*0.97;
  canvasH = displayHeight *0.97;
  createCanvas(canvasW,canvasH);

  //Banco de dados
  database = firebase.database();

  //Criar o objeto game e iniciar o jogo
  game = new Game();
  game.getState();
  game.start();

}

function draw(){

  //Verificar se existem 4 jogadores registrados para iniciar o jogo
  if(playerCount === 4 && player.index !== null){
    //console.log(playerCount);
    game.update(1);
  }

  //Se o estado de jogo for 1 iniciar o jogo
  if(gameState === 1){
    clear();

    game.play();
  }
   
  //se o estado  dejogo for final 
  if(gameState === 2){
   game.end();
  }
  
}