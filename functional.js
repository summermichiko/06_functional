function countWords(sentence) {
	var total = 0;
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] == " ") {
			total++;
		}
	}
	return total + 1;
};

