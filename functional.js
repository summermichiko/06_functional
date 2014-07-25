function countWords(sentence) {
	var total = 0;
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] == " ") {
			total++;
		}
	}
	return total + 1;
};

function makeAdder(adder) {
	return function (secondAdder) {
		return adder + secondAdder;
	}
};

//forEach function (test 4)

function map() {
	var numbers = [1,2,3];
	var doubles = numbers.map(function(numbers){
		return numbers * 2;

	});
	return doubles;

	var triples = numbers.map(function(numbers){
		return numbers * 3;
	});
	return triples; //failing to return this value (test 6)
};

function filter() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var even_filter = []; 
	var odd_filter = [];
	for(i = 0; i < numbers.length; i++) {
		if(numbers[i] % 2 === 0){
			even_filter.push(numbers[i]);
		} else {
			odd_filter.push(numbers[i]);
		}
	}
	return even_filter;
	return odd_filter; //failing to return this value (test 8)
};

function contains(a,b) {
	for(i = 0; i < a.length; i++){
		if(a[i] === b) {
			return true;
		} else {
			return false;
		}
	}
};















