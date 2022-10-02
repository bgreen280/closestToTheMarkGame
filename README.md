# closestToTheMarkGame
game engine to play closest to the mark

Structure:
index
  choose version
    run version





Classes Components
  Game {CRUD}
    players: Players
    results: Results
    menu: Menu

    runGame
    quitGame
    runRound
    validation
      sufficient players
      valid input
    


    call menu item action
    calculateResults
    update results
    create player


  Logic

----
  Players {CRUD + Bulk}
    player: Player

    read, update
  Player {CRUD}
    name: string
    position: number
    optional: any

    create, read

----
  Menu {CRUD - Bulk}
    menuItems: MenuItems

    read, update

  MenuItems {CRUD}
    menuItem: MenuItem

    read, update

  MenuItem {CRUD}
    id: action: string
    name: string
    action: string
    description: string

    create, read
    
----
  Results {CRUD}
    result: Result

    read, update
  
  Result: {CRUD}
    id: round: string
    round: number
    origin: number
    winner: string
    optional: any

    create, read

    
What data to save?
  round, origin, winnerId

