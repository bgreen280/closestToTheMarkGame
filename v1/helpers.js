import prompts from 'prompts';

export const logWelcomeMessages = messages => {
		messages.forEach((message) => console.log(message));
};

export async function getUserInput(question) {
	const { response } = await prompts(question)
	console.log('getUserInput', response)
	return response;
};