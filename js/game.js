class Game{

    constructor(){}

    getState(){
        //Criar referência ao dado armazenado em gameState no banco de dados
        var gameStateRef  = database.ref('gameState');

        //Ouvinte monitora o dado armazenado na variável gameState e modifica o valor
        gameStateRef.on("value",function(data){
            gameState = data.val();
         })

    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){

        if(gameState === 0){
            player = new Player();

            
            var playerCountRef = await database.ref('playerCount').once('value');

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form()
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1",car1_img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2_img);
        car3 = createSprite(500,200);
        car3.addImage("car3",car3_img);
        car4 = createSprite(700,200);
        car4.addImage("car4",car4_img);
        cars = [car1, car2, car3, car4];


    }

    play(){
        
        //Esconder formulário
        form.hide();

        
        //Exemplo de tela de jogo
        //textSize(30);
        //text("Game Start", 120,100);

        //Mostrar informações dos jogadores da tela
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            //Mudar o pano de fundo
            background(rgb(198,135,103));

            image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);


            //Mostrar na tela a distância percorrida pelo jogador
            //var display_position = 130;
            //display_position += 20;

            //Indice da matriz
            var index = 0;

            //Definir variáveis para armazenar as posições do carro do jogador
            var x = 200;
            var y;

            //Mudar a cor do jogador atual para vermelho
            for(var plr in allPlayers){

                //Adicionar 1 ao indice a cada vez que o loop é executado
                index = index + 1;

                //Posicionar próximo jogador 200 pixels de distância do anterior
                x = x + 200;

                //Utilizar o bancos de dados para posicionar o carro na posição Y armazenada
                y = canvasH - allPlayers[plr].distance;
                cars[index -1].x = x;
                cars[index -1].y = y;

                //Verificar se é o jogador atual
                if(index === player.index){
                    stroke(10);
                    fill("purple");
                    ellipse(x,y,60,60);
                    cars[index -1].shapeColor = "red";
                    camera.position.x = canvasW/2;
                    camera.position.y = cars[index - 1].y
                }
            }

            //text(10);
            //text(allPlayers[plr].name +" Distância: "+ allPlayers[plr].distance, 100, display_position);
        }

        //Quando a tecla para cima é pressionada atualizar a posição do jogador
        if(keyIsDown(UP_ARROW) && player.index !== null && player.distance < 3850){
            player.distance +=50;
            player.update();
        
        
        
        }
      
        if(player.distance > 3850){
        
            gameState = 2

        }
        drawSprites();
    }
     end(){
    text("Fim de jogo")


     }
}