import { questions } from '../data.js';
import { getUserInput } from '../helpers.js';
import { Player } from './Player.js'

export class Game {
	constructor(menu) {
		this.players = [],
		this.origins = [],
		this.winners = [],
		this.menu = menu
	}

  
	getMostRecentWinner() {
		if (this.winners.length === 0) {
			console.log('  no games have been played yet');
			return;
		} else {
			const mostRecentWinner = this.winners[this.winners.length - 1];
			console.log(`  the most recent winner: ${mostRecentWinner.getName()}`);
			return mostRecentWinner;
		}
	}

	// TODO: modify output fo readability
	getPlayers() {
		if (this.players.length === 0) {
			console.log('  no players yet have been added yet');
		} else {
			for (let player in this.players) {
				console.log('');
				console.log('////////////////////');
				this.players[player].getInformation();
			}
		}
		return this.players.length > 0;
	}

	// TODO: modify output to show table of players and their wins
	getWinners() {
		if (this.winners.length > 0) {
			for (let winner of this.winners) {
				console.log(winner);
			}
		} else {
			console.log('  no games have been played yet');
		}
		return this.winners;
	}

	getMenu() {
		console.log('menu:');
		Object.keys(this.menu).forEach((key) => {
			console.log(`  - ${this.menu[key]}`);
		});
		return this.menu;
	}

	createNewOrigin() {
		const newOrigin = Math.floor(Math.random() * 100);
		this.origins.push(newOrigin);
		for (let player in this.players) {
			this.players[player].setOrigin(newOrigin);
		}
		console.log(`  your new origin is: ${newOrigin}`);
		return newOrigin;
	}

	async createNewPlayer() {
		// let prompt = await prompts(questions.name);
		// const name = await prompt.message;
		// console.log('');
		// prompt = await prompts(questions.position);
		// const position = await prompt.message;

		const name = await getUserInput(questions.name);
		const position = await getUserInput(questions.position);

		const origin = Math.random() * 100;
		const newPlayer = new Player(name, position, origin);
		this.updatePlayers(newPlayer);
		console.log('');
		console.log('  new player has been created with following props: ');
		for (let prop in newPlayer) {
			console.log(`\n    ${prop}: ${newPlayer[prop]}`);
		}
		return newPlayer;
	}

	createNewWinner() {
		const notEnoughPlayers = this.checkIfEnoughExistingPlayers();
		if (notEnoughPlayers) {
			return;
		}

		let closestToOrigin = Infinity;
		let closestPlayer = '';

		for (let player of this.players) {
			const playerDistance = player.getDistanceFromOrigin();
			if (playerDistance < closestToOrigin) {
				closestToOrigin = playerDistance;
				closestPlayer = player;
			}
		}
		this.updateWinners(closestPlayer);
		console.log(`  new winner is ${closestPlayer.getName()}`);
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

	updateOrigins(newOrigin) {
		this.origins.push(newOrigin);
		return this.origins;
	}

	playRound() {
		const notEnoughPlayers = this.checkIfEnoughExistingPlayers();
		if (notEnoughPlayers) {
			return;
		}
		// creates new origin
		console.log('');
		console.log('  starting new round');
		console.log('');
		console.log('  creating new origin...');
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
	deletePlayer() {}
}
