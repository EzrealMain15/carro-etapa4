class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(canvasW*0.45, 0);

        //Posições dos elementos na tela
        this.input.position(canvasW*0.45, canvasH*0.50);
        this.button.position(canvasW*0.50, canvasH*0.55);        
        this.reset.position(displayWidth-100,20)
        this.button.mousePressed(()=>{
            //Esconder elementos
            this.input.hide();
            this.button.hide();
            
            //Criar uma variável para armazenar o valor recebido do jogador
            player.name = this.input.value();
            
            //Atualizar contador de jogadores e o nome do usuário no bando de dados
            playerCount += 1;
            player.index = playerCount;
            console.log( playerCount);

            player.update();
            player.updateCount(playerCount);

            //Mensagens de boas vindas
            this.greeting.html("Olá " + player.name);
            this.greeting.position(canvasW*0.48, canvasH*0.30);
          });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0)


         })
    }

}