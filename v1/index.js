import { menuOptions, questions, welcomeMessages } from './data.js';
import { logWelcomeMessages, getUserInput } from './helpers.js';
import { Game } from './Classes/Game.js'

/**
 * example two:
 *   clear variable names
 *   uses ternary operator syntax in return statement
 *   object-oriented programming
 */
async function closestToTheMarkGame(menuOptions) {
	let gameState = true;
	const game = new Game(menuOptions);
	
	logWelcomeMessages(welcomeMessages);
	game.getMenu();
	
	// const menu = new Menu(menuItems)
	// menu.getMenuItems();

	while (gameState) {
		console.log('');

		// const prompt = await prompts(questions.prompt);
		// const input = await prompt.response;
		const input = await getUserInput(questions.prompt);
		console.log('game', input)

		try {

		}
		catch (err) {

		}

		// gameState = false;

		switch (input) {
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

			case undefined:
				gameState = game.endGame();
				break;

			default:
				console.log('the command is not accepted. please try again.');
				break;
		}
	}
	console.log('thanks for playing');
}






closestToTheMarkGame(menuOptions);
