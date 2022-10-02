































































































//   -------------------------------------------------------

// const { lchmod } = require("fs");

// /**
// * example one: 
// *   clear variable names
// *   uses ternary operator syntax in return statement
// */
// function closestToTheMark1(player1, player2){
//   const theMark = Math.floor(Math.random() * 100);
//   console.log(`If theMark is ${theMark}...`);
//   const playerOneDistanceFromOrigin = Math.abs(player1 - theMark);
//   const playerTwoDistanceFromOrigin = Math.abs(player2 - theMark);
  
//   return playerOneDistanceFromOrigin < playerTwoDistanceFromOrigin ? 'Player 1 is closer' : 'Player 2 is closer';
// }
  
// console.log(closestToTheMark1(25, 75));


































































//   -------------------------------------------------------
/**
* example two: 
*   clear variable names
*   uses ternary operator syntax in return statement
*   object-oriented programming
*/
class Player {
  constructor(name, position, origin) {
    this.name = name;
    this.position = position;
    this.origin = origin;
    this.distanceFromOrigin = 0;
  }
    
  getName() {
    return this.name;  
  }
  
  getPosition() {
    return this.position;  
  }

  getOrigin() {
    return this.origin;
  }

  getDistanceFromOrigin() {
    this.calculateDistanceFromOrigin();
    return this.distanceFromOrigin;
  }

  calculateDistanceFromOrigin() {
    this.distanceFromOrigin = Math.abs(this.origin - this.position);
  }  

  setName(newName) {
    this.name = newName;
    return this.name
  }

  setPosition(newPosition) {
    this.position = newPosition;
    return this.position;
  }

  setOrigin(newOrigin) {
    this.origin = newOrigin;
    return this.origin;
  }

  updatePlayer(newName = this.name, newPosition = this.position, newOrigin = this.origin) {
    this.name = newName;
    this.position = newPosition;
    this.origin = newOrigin;
  }
}

class GameInstance {
  constructor(players) {
    this.players = [...players];
    this.origins = [];
    this.winners = [];
    // this.winner = '';
0  }

  // READ
  getMostRecentWinner() {
    // this.calculateClosestToTheMark(closestToOrigin, closestPlayer);
    return !!this.winners : this.winners[this.winners.length - 1] : 'No rounds played yet.'
  }
  
  getPlayers() {
    for(let player of this.players) {
      console.log(player);
    };
    return !!this.players ? this.players : 'No Players';
  }

  getWinners() {
    for(let winner of this.winners) {
      console.log(winner);
    };
    return !!this.winners ? this.winners : 'No Winners';
  }

  getOrigins() {
    for(let origins of this.origins) {
      console.log(origin);
    };
    return !!this.origins ? this.origins : 'No Winners';
  }

  getMostRecentOrigin() {
    return !!this.origins : this.orogins[this.origins.length - 1] : 'No rounds played yet.'
  }

  getRoundsPlayed() {
    console.log(this.winners.length);
    return this.winners.length;
  }
  
  printTableOfPlayers() {
    console.log(this.players);
  }


  // CREATE
  createNewOrigin() {
    const newOrigin = Math.floor(Math.random() * 100);
    this.origins.push(newOrigin);
    console.log(`your new origin is: ${newOrigin}`);
    return newOrigin;
  }

  createNewPlayer(name, position, origin) {
    const newPlayer = new Player(name, position, origin);
    players.push(newPlayer);
    return newPlayer;
  }

  createNewWinner() {
    if (this.players.length < 2) {
      console.log('please add two players to starts');
      return;
    } else if (this.players.length < 1) {
      console.log('please add one players to start');
      return;
    }
    let closestToOrigin = Infinity;
    let closestPlayer = '';

    for (let player of this.players) {
      const playerDistance = player.getDistanceFromOrigin()
      if (playerDistance < closetToOrigin) {
        closestToOrigin = playerDistance
        closestPlayer = player.getName();
      }
    }  
    this.updateWinners(closestPlayer)
    return closestPlayer;
  }
  
  // UPDATE
  updateWinners() {
    this.winners.push(closestPlayer);
    return this.winners;
  }

  // // no update if players not provided
  // updatePlayers(players) {

  //   if (!!players) {
  //     const newPlayers = [];
  //     for (let player of players) {
  //       const newPlayer = this.createNewPlayer();
  //       this.players
  //     }
  //   }
  //   return this.players;
  }

  // updateOrigins(newOrigin) {
  //   return this.origins;
  // }


  // // HELPERS
  playRound(players) {    
    // const menu = 'press x to create a new origin or q to quit'
    // console.log(menu)
    // creates new origin 
    console.log('creating new origin...')
    console.log('...');
    const newOrigin = this.createNewOrigin();
    console.log(`new origin is: ${newOrigin}`);

    // update origins list
    // console.log('updating origins archive...');
    // console.log('...');
    // this.updateOrigins(newOrigin);
    // console.log('archive update complete');
    
    
    
    
    // players (if provided)
    // this.updatePlayers(players);

    console.log('calculating new winner...');
    console.log('...');
    this.createNewWinner();
    console.log(`new winner is ${this.getMostRecentWinner()}`)
    
    // update winner
    // // this.updateWinners(newWinner);
    // console.log('updating winners archive...');
    // console.log('...');
    // console.log('archive update complete');
    
    // return closest to the mark
    return this.getMostRecentWinner();        
  }

}


function closestToTheMark3() {
  // gameState
  let gameState = true;
  const gameInstance = new GameInstance();
  const menuOptions = {
    'p' : 'p to play round and find the cloest player to the origin',
    'w' : 'w to get most recent winner',
    'ws': 'ws to get list of winners;',
    'a' : 'a to add new players',
    'd' : 'd to delete players',
    'q' : 'q to end game',
    // 'o' : 'o to create a new origin',
    // 'p' : 'p to play new round',
    // 'g' : 'g to generate new number',
    }
  };

  const printMenu = (menuOptions) => {
    menuOptions.forEach(option => {
      console.log(option);
    });
  };

  // welcome message
  // welcome to game. press enter to get started      
  console.log('welcome to closest to the mark')
  console.log('this game lets you find min dis of n>1 players from a randomly generated origin');
  console.log('the menu will be printed below.');
  console.log('have fun');
  while (gameState) {
    // welcome to the menu, here's a list of options:
    printMenu(menuOptions);
    // select your command
    const input = input("please enter a command from the menu above: ");
    switch(input):
      // (p) play round
      case 'p':
        gameInstance.playRound();
        break;
      // (w) get most recent winner: return most recent winner
      case 'w':
        console.log(gameInstance.getMostRecentWinner());
        break;
        // (ws) get list of winners: return list of winners (sorted most to least)
      case 'ws':
        console.log(gameInstance.getWinners());
        break;
      // (a) add new player to player list
      case 'a':
        const name = input('please input a player name: ');
        const position = input('please input a player position (number: 0 - 100)')
        gameInstance.createNewPlayer(name, position, gameInstance);
        console.log('press ')
        break;
      // (d) delete player from player list
      case 'd':
        // gameInstance.create
        console.log('currently under dev');
        break;
      // (q) end game: return goodbye
      case 'q':
        gameState = false;
        break;
      default:
        console.log('the command is not accepted. please try again.')
        break;
          // case 'i':
    
          // (o) press enter to generate a new origin: return the new origin
          // (d) press enter to calculate the distance for each player: calculate the distance for each player, return done!
          // (c) press enter to find out the closest to the mark
            // the closest is: X
            // game over, 
              // (m) main menu
              // (q) end game
      // (i) instructions
    
      }
  }
  console.log('thanks for playing')  ;
}































  
const initialplayers = [["player 1", 25]. ]
function closestToTheMark2(player1, player2){
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);

  const players = [];
  
  const playerOne = new Player('Player 1', player1, theMark);
  players.push(playerOne)
  const playerTwo = new Player('Player 2', player2, theMark);
  players.push(playerTwo)

  
  let closetToOrigin = Infinity;
  let closestPlayer = '';
  
  for(let player of players) {
    // console.log(player)
    const playerDistance = player.getDistanceFromOrigin()
    if (playerDistance < closetToOrigin) {
      closestToOrigin = playerDistance
      closestPlayer = player.getName(); 
    }
  }

  return `${closestPlayer} is closest.`;
}
  
console.log(closestToTheMark2(25, 75));

































































































































































































































































































































