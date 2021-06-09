// Imports
import Dice from "./dice.js";
// Select the #roll button element from the DOM
const rollBtn = document.querySelector("#roll");

// Listen for a click event on the rollBtn element
rollBtn.addEventListener("click", () => {
	// Select the input fields from the DOM
	const amountInput = document.querySelector("#amount");
	const sidesInput = document.querySelector("#sides");

	// Get the input value of amountInput and parse it into a number
	let amount = parseInt(amountInput.value);
	// Get the input value of sidesInput and parse it into a number
	let sides = parseInt(sidesInput.value);
	// Create a new dice object and pass in the amount and sides in the class constructor
	let dice = new Dice(amount, sides);
	// Store all the randomised results of the dice roll into an array
	let diceArr = dice.roll();
	// Call the addDice function to loop over the array and display elements in the output
	addDice(diceArr);
});

const addDice = (arr) => {
	// Select the #rando-output div element where the dice numbers get displayed
	const outputDiv = document.querySelector("#rando-output");
	// Clear the contents of the outputDiv element
	outputDiv.innerHTML = "";

	// Loop over the array with the dice numbers stored inside them in the output
	arr.forEach((diceNo) => {
		// Create a div for each dice
		let diceDiv = document.createElement("div");
		// Create a text node with the number of the dice as value
		let diceNoNode = document.createTextNode(diceNo);
		// Add the diceNoNode to the diceDiv element
		diceDiv.appendChild(diceNoNode);
		// Add the diceDiv to the outputDiv element
		outputDiv.appendChild(diceDiv);
	});
};
