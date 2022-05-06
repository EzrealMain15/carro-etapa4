class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    //Obter o número de jogadores registrados
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    //Atualizar o número de jogadores no banco de dados
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    //Atualizar o nome do jogador registrado
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance
      });
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }