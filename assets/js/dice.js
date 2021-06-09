// Create a class for the Dice
class Dice {
	// Array for holding the randomised results
	results = [];

	// Constructor of the class with the amount of die and sides as arguments
	constructor(amount, sides) {
		// Check the validity of the inputs (must be greater than 0)
		if (sides > 0 && amount > 0) {
			// Assign the values to the fields of the class
			this._amount = amount;
			this._sides = sides;
		} else {
			// Throw an error for not having valid arguments supplied
			throw Error("Invalid parameters.");
		}
	}

	// Method for rolling the die
	roll() {
		// Produce the same amount of results as many die have been rolled
		for (let i = 0; i < this._amount; i++) {
			// Randomise the result of the roll
			this.results.push(Math.floor(Math.random() * this._sides) + 1);
		}

		return this.results;
	}
}

// Export the class
export default Dice;
