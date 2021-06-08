import Dice from "./dice.js";

const rollBtn = document.getElementById("roll");

rollBtn.addEventListener("click", () => {
	const amountInput = document.getElementById("amount");
	const sidesInput = document.getElementById("sides");
	let amount = parseInt(amountInput.value),
		sides = parseInt(sidesInput.value),
		dice = new Dice(sides, amount),
		diceArr = dice.roll();
	addDice(diceArr);
});

const addDice = (arr) => {
	const outputDiv = document.getElementById("rando-output");
	outputDiv.innerHTML = "";
	arr.forEach((diceNo) => {
		let divEl = document.createElement("div");
		let textNode = document.createTextNode(diceNo);
		divEl.appendChild(textNode);
		outputDiv.appendChild(divEl);
	});
};
