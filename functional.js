function countWords(sentence) { //1
	var total = 0;
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] == " ") {
			total++;
		}
	}
	return total + 1;
};


function makeAdder(adder) { //2,3
	return function (secondAdder) {
		return adder + secondAdder;
	}
};


var runMeThreeTimes = function(number){ //4 - not passing
		return number + 1;
};
var myArray = [1, 2, 3]; 
var forEach = function (myArray, runMeThreeTimes) {
	spyOn(myArray, runMeThreeTimes);
};


function map() { //5, 6 (6 not passing)
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


function filter() {//7, 8 (8 not passing)
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


function contains(a,b) { //9, 10 (9 not passing)
	for(i = 0; i < a.length; i++){
		if(a[i] === b) {
			return true;
		} else {
			return false;
		}
	}
};


//tests 11, 12, 13 (12 not passing)
function reduce(array, startPoint, combiningFunc) {
    var current = null;
    for(var i = startPoint; i<array.length; i++){
        current = combiningFunc(current, array[i]);
    }
    return current;
};
var countWordsInReduce = function() {
    var newString = this.join(" ");
    return newString.split(" ").length;
};
function sum(array) {
    return reduce(array, 0, function(a, b) {
    	return a+b;
    });
};


function every() { //14 - 18 not passing

};


function any(array, func){ //19, 20, 21, 22, 23
  	if(func === undefined){
   		var func = function(item){
    		return item;
  		};
	};
 	for(var i=0; i<array.length; i++){
    	if(func(array[i])){
      		return true;
    	}
  	};
  	return false;
};


function once() { //24, first attempt
    var num = 0; //how to incorporate increment()?
		do {
			num++;
		}
		while (num > 2);
        return num;
};

var once = function (func) {
	var ran = false;
	return function () {
		if (!ran) {func();}
		ran = true;
	};
};


function wrapper(func, wrapperFunc) { //25 not passing
	return function(newFunction) {
		//give it the block function
		wrapperFunc(wrapper);
	};
};



















