function createRandom(lowerNum, higherNum) {
		if (isNaN(lowerNum) || isNaN(higherNum)) {
		throw new Error("One of your numbers is not a valid number");
	} else {
	var randomNum = Math.floor(Math.random() * (higherNum - lowerNum + 1)) + lowerNum;
	return randomNum;
	}
}


console.log(createRandom('some string', 100));
