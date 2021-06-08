class Dice {
	results = [];

	constructor(sides = 4, amount = 1) {
		if (sides > 0 && amount > 0) {
			this._sides = sides;
			this._amount = amount;
		} else {
			throw Error("Invalid parameters.");
		}
	}

	roll() {
		for (let i = 0; i < this._amount; i++) {
			this.results.push(Math.floor(Math.random() * this._sides) + 1);
		}
		return this.results;
	}
}

export default Dice;
