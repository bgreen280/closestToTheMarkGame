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
    console.log('')
    // console.log('  ////////////////////////////');
    // for(let prop in Object.keys(this)) {
    //   console.log(`\n    -  ${Object.keys(this)[prop]}: ${this[Object.keys(this)[prop]]}`)
    // }
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
0  }

  getMostRecentWinner() {
    return this.winners.length > 0 ? this.winners[this.winners.length - 1].getInformation() : 'no winners yet'
  }
  
  getPlayers() {
    if (this.players.length > 0) {
      for(let player in this.players) {
        const playerInformation = this.players[player].getInformation();
        console.log('');
      };
    } else {
      console.log('no players yet ')
    }
    return this.players.length > 0;
  }

  getWinners() {
    if (this.winners.length > 0) {
      for(let winner of this.winners) {
        console.log(winner);
      };
    } else {
      console.log('no winners yet')
    }
    return this.winners;
  }

  getMenuOptions() {
    const menuOptions = this.menu.getMenuOptions();
    return menuOptions;
  }
  
  createNewOrigin() {
    const newOrigin = Math.floor(Math.random() * 100);
    this.origins.push(newOrigin);
    for (let player in this.players) {
      this.players[player].setOrigin(newOrigin)
    }
    console.log(`your new origin is: ${newOrigin}`);
    return newOrigin;
  }

  createNewPlayer() {
    const name = prompt('please input a player name: ');
    console.log('')
    const position = prompt('please input a player position (number: 0 - 100)');
    const origin = origin = Math.random() * 100;
    const newPlayer = new Player(name, position, origin);
    this.updatePlayers(newPlayer);
    console.log('')
    console.log('new player has been created with following props: ')
    for(let prop in newPlayer) {
      console.log(`\n  ${prop}: ${newPlayer[prop]}`)
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
    console.log(`new winner is ${this.getMostRecentWinner().getName()}`)
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
    console.log('///');
    console.log('starting new round');
    console.log('creating new origin...')
    console.log('...');
    const newOrigin = this.createNewOrigin();
    console.log(`new origin is: ${newOrigin}`);
    console.log('calculating new winner...');
    console.log('...');
    this.createNewWinner();
    
    // return closest to the mark
    return this.getMostRecentWinner();        
  }

  checkIfEnoughExistingPlayers() {
    const playerCount = this.players.length;
    if (playerCount < 2) {
      console.log('please add two players to start');
    } else if (playerCount < 1) {
      console.log('please add one players to start');
    }
    return playerCount < 2;
  }
}

class Menu {
  constructor(menuOptions) {
    this.menuOptions = this.createMenu(menuOptions)
  }

  createMenuItem(menuItem) {
    const [name, commmand, description] = menuItem;
    const newMenuItem = new MenuItem(name, command, description)
    this.menuOptions.push(newMenuItem);
    console.log(newMenuItem);
    return newMenuItem;
  }

  createMenu(menuItems) {
    for (let menuItem in menuItems) {
      this.createMenuItem(menuItem)
    }
    console.log(this.menuOptions);
    return this.menuOptions;
  }

  getMenuOptions() {
    if (this.menuOptions.length > 0) {
      for (let menuItem in this.menu) {
          console.log(menuItem);
        };
    } else {
      console.log('no menu items yet')
    }
    return this.menuItems;
  }
}

class MenuItem {
  constructor(name, command, description) {
    this.name = name,
    this.action = action,
    this.description = description,
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  getAction() {
    console.log(this.action);
    return this.action;
  }

  getDescription() {
    console.log(this.description);
    return this.description;
  }

  // TODO: add create, update, delete methods
}

// TODO: create and integrate logger object
// class Logger {}

function closestToTheMarkGame(menuOptions) {
  // gameState
  let gameState = true;
  // const newMenu = new Menu(menuOptions);
  // const gameInstance = new GameInstance(newMenu);

  const menu = new Menu(menuOptions);
  const game = new GameInstance();


  // welcome message 
  console.log('welcome to closest to the mark')
  console.log('this game lets you find min dis of n>1 players from a randomly generated origin');
  console.log('the menu will be printed below.');
  console.log('have fun');
  console.log('')
  gameInstance.getMenu();
  console.log('')
  
  // game loop
  while (gameState) {
    // print menu options and get user input
    console.log('')
    const input = prompt("please enter a command from the menu above: ");
    console.log('')


    
    // execute user command
    // switch(input) {
    //   // (p) play round
    //   case 'p':
    //     gameInstance.playRound();
    //     break;

    //   // (w) get most recent winner: return most recent winner
    //   case 'w':
    //     gameInstance.getMostRecentWinner();
    //     break;
          
    //   // (l) get list of winners: return list of winners (sorted most to least)
    //   case 'l':
    //     gameInstance.getWinners();
    //     break;
          
    //   // (g) get all players in list
    //   case 'g':
    //     gameInstance.getPlayers();
    //     break;
        
    //   // (a) add new player to player list
    //   case 'a':
    //     gameInstance.createNewPlayer();
    //     break;
      
    //   // (d) delete player from player list
    //   case 'd':
    //     // gameInstance.create
    //     console.log('currently under dev');
    //     break;
        
    //   // (q) end game: return goodbye
    //   case 'q':
    //     gameState = false;
    //     break;

    //   // (m) menu: return log of menu
    //   case 'm':
    //     gameInstance.getMenu();
    //     break;
      
    //   // case if user enters invalid key
    //   default:
    //     console.log('the command is not accepted. please try again.')
    //     break;        
      
    // }
  }
  console.log('thanks for playing')  ;
};


// implementation data
// const printMenu = (menuOptions) => {
//   menuOptions.forEach(option => {
//     console.log(option);
//   });
// };

// const menuOptions = {
// 'p' : '"p" to play round and find the cloest player to the origin',
// 'w' : '"w" to get most recent winner',
// 'l' : '"l" to get list of winners',
// 'g' : '"g" to get list of players',
// 'a' : '"a" to add new players',
// 'd' : '"d" to delete players',
// 'q' : '"q" to end game',
// }

const getMenuItems = [
  ['p', 'playRound', '"p" to play round and find the cloest player to the origin',]
  ['w', 'getMostRecentWinner', '"w" to get most recent winner',]
  ['l', 'getWinners', '"l" to get list of winners'],
  ['g', 'getPlayers', '"g" to get list of players'],
  ['a', 'createNewPlayer', '"a" to add new players'],
  ['d', '', '"d" to delete players'],
  ['q', '', '"q" to end game'],
]

closestToTheMarkGame(menuOptions);








































































































































































































































































































































