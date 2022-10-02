export const menuOptions = {
	p: '"p" to play round and find the closest player to the origin',
	w: '"w" to get most recent winner',
	l: '"l" to get list of winners',
	g: '"g" to get list of players',
	a: '"a" to add new players',
	d: '"d" to delete players',
	q: '"q" to end game',
	m: '"m" to get the menu',
};

const mockMenuItems = {
  id: {
  name: 'p',
  id : 'p', 
  action: 'playRound', 
  description: '"p" to play round and find the cloest player to the origin',
}}
//   ['w', 'getMostRecentWinner', '"w" to get most recent winner',]
//   ['l', 'getWinners', '"l" to get list of winners'],
//   ['g', 'getPlayers', '"g" to get list of players'],
//   ['a', 'createNewPlayer', '"a" to add new players'],
//   ['d', 'deletePlayer', '"d" to delete players'],
//   ['q', 'quitGame', '"q" to end game'],
//   ['m', 'getMenu', '"m" to get menu'],
// ]


const menuItems = [
  ['p', 'playRound', '"p" to play round and find the cloest player to the origin',]
  ['w', 'getMostRecentWinner', 'results', '"w" to get most recent winner',]
  ['l', 'getWinners', 'results', '"l" to get list of winners'],
  ['g', 'getPlayers', 'players', '"g" to get list of players'],
  ['a', 'createNewPlayer', 'players', '"a" to add new players'],
  ['d', 'deletePlayer', 'players', '"d" to delete players'],
  ['q', 'quitGame', 'game', '"q" to end game'],
  ['m', 'getMenu', 'menu', '"m" to get menu'],
]

export const questions = {
	prompt: {
		type: 'text',
		name: 'response',
		message: 'please enter a command from the menu above (m for menu)',
	},
	name: {
		type: 'text',
		name: 'response',
		message: 'please enter a player name',
	},
	position: {
		type: 'text',
		name: 'response',
		message: 'please enter a starting position for the player',
	},
};

export const welcomeMessages = [
	'welcome to closest to the mark',
	'this game lets you find min dis of n>1 players from a randomly generated origin',
	'the menu will be printed below.',
	'have fun',
	'',
];