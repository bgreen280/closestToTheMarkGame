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
    this.distanceFromOrigin = this.getDistanceFromOrigin();
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
    this.updateDistanceFromOrigin();
    return this.distanceFromOrigin;
  }

  getInformation() {
    for(let prop in Object.keys(this)) {
      console.log(`    -  ${Object.keys(this)[prop]}: ${this[Object.keys(this)[prop]]}`)
    }
    // console.log('')
    return this;
  }

  setOrigin (newOrigin) {
    this.origin = newOrigin;
    this.updateDistanceFromOrigin();
    return this.origin
  }
  
  updateDistanceFromOrigin() {
    this.distanceFromOrigin = Math.abs(this.origin - this.position);
  }  
}

class Game {
  constructor(menu) {
    this.players = [];
    this.origins = [];
    this.winners = [];
    this.menu = menu;
  }

  getMostRecentWinner() {
    if (this.winners.length === 0) {
      console.log('  no games have been played yet')
      return;
    } else {
      const mostRecentWinner = this.winners[this.winners.length - 1];
      console.log(`  the most recent winner: ${mostRecentWinner.getName()}`);
      return mostRecentWinner;
    }
  }

  // TODO: modify output fo readibility
  getPlayers() {
    if (this.players.length === 0) {
      console.log('  no players yet have been added yet')
    } else {
      for(let player in this.players) {
        console.log('//////////////////////////');
        this.players[player].getInformation();
        // console.log('//////////////////////////');
      };
    }
    return this.players.length > 0;
  }

  // TODO: modify output to show table of players and their wins
  getWinners() {
    if (this.winners.length > 0) {
      for(let winner of this.winners) {
        console.log(winner);
      };
    } else {
      console.log('  no games have been played yet')
    }
    return this.winners;
  }

  getMenu() {
    console.log('menu:')
    Object.keys(this.menu).forEach(key => {
      console.log(`  - ${this.menu[key]}`);
    });
    return this.menu;
  }
  
  createNewOrigin() {
    const newOrigin = Math.floor(Math.random() * 100);
    this.origins.push(newOrigin);
    for (let player in this.players) {
      this.players[player].setOrigin(newOrigin)
    }
    console.log(`  your new origin is: ${newOrigin}`);
    return newOrigin;
  }

  createNewPlayer() {
    const name = prompt('  please input a player name: ');
    console.log('')
    const position = prompt('  please input a player position (number: 0 - 100)');
    const origin = Math.random() * 100;
    const newPlayer = new Player(name, position, origin);
    this.updatePlayers(newPlayer);
    console.log('')
    console.log('  new player has been created with following props: ')
    for(let prop in newPlayer) {
      console.log(`\n    ${prop}: ${newPlayer[prop]}`)
    }
    return newPlayer;
  }

  createNewWinner() {
    const notEoughPlayers = this.checkIfEnoughExistingPlayers();
    if (notEoughPlayers) {
      return;
    }

    let closestToOrigin = Infinity;
    let closestPlayer = '';

    for (let player of this.players) {
      const playerDistance = player.getDistanceFromOrigin();
      if (playerDistance < closestToOrigin) {
        closestToOrigin = playerDistance
        closestPlayer = player;
      }
    };  
    this.updateWinners(closestPlayer);
    console.log(`  new winner is ${closestPlayer.getName()}`)
    return closestPlayer;
  }
  
  updateWinners(newWinner) {
    this.winners.push(newWinner);
    return this.winners;
  }

  updatePlayers(newPlayer) {
    this.players.push(newPlayer);
    return this.players;
  }

  updateOrgins(newOrigin) {
    this.origins.push(newOrigin);
    return this.origins;
  }

  playRound(players) {    
    const notEoughPlayers = this.checkIfEnoughExistingPlayers();
    if (notEoughPlayers) {
      return;
    }
    // creates new origin
    console.log('');
    console.log('  starting new round');
    console.log('');
    console.log('  creating new origin...')
    console.log('');
    this.createNewOrigin();
    console.log('');
    console.log('  calculating new winner...');
    console.log('');
    this.createNewWinner();
    return;
  }

  endGame() {
    return false;
  }

  checkIfEnoughExistingPlayers() {
    const playerCount = this.players.length;
    if (playerCount === 0) {
      console.log('please add two more players to start');
    } else if (playerCount === 1) {
      console.log('please add one more player to start');
    }
    return playerCount < 2;
  }

  // TODO: 
  // deletePlayer() {}
}

function closestToTheMarkGame(menuOptions) {
  // gameState
  let gameState = true;
  const game = new Game(menuOptions);

  // welcome message 
  console.log('welcome to closest to the mark')
  console.log('this game lets you find min dis of n>1 players from a randomly generated origin');
  console.log('the menu will be printed below.');
  console.log('have fun');
  console.log('')
  game.getMenu();
  console.log('')
  
  // game loop
  while (gameState) {
    console.log('')
    const input = prompt("please enter a command from the menu above (m for menu)");
    console.log('')

    switch(input) {
      case 'p':
        game.playRound();
        break;

      case 'w':
        game.getMostRecentWinner();
        break;
          
      case 'l':
        game.getWinners();
        break;
          
      case 'g':
        game.getPlayers();
        break;
        
      case 'a':
        game.createNewPlayer();
        break;
      
      case 'd':
        console.log('currently under dev');
        break;
        
      case 'q':
        gameState = game.endGame();
        break;

      case 'm':
        game.getMenu();
        break;
      
      default:
        console.log('the command is not accepted. please try again.')
        break;        
      
    }
  }
  console.log('thanks for playing');
};


const menuOptions = {
'p' : '"p" to play round and find the cloest player to the origin',
'w' : '"w" to get most recent winner',
'l' : '"l" to get list of winners',
'g' : '"g" to get list of players',
'a' : '"a" to add new players',
'd' : '"d" to delete players',
'q' : '"q" to end game',
'm' : '"m" to get the menu'
};

closestToTheMarkGame(menuOptions);








































































































































































































































































































































