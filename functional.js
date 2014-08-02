var countWords = function(sentence) {
  return sentence.split(" ").length;
}; //these are all function expressions and need semi-colons
  
var makeAdder = function(num1) {
  // this variable will be "closed upon" aka, it will be kept alive
  // num1 = 2 
  var adder = function (num2) {
    return num1+num2;
  };
  return adder; //without the (), it's a reference to the function, this is returning the function itself
  //return adder(); is very different, this is returning the value that this function returns
};

var forEach = function(array, funcRunOnEachElement) {
  for (var i = 0; i < array.length; i++) {
    funcRunOnEachElement(array[i]);
  }
};

var map = function(array, funcRunOnEachElement) {
  var newMapArray = [];
  for(var i =0; i<array.length; i++){
    newMapArray.push(func(arr[i]))
  }
  return newMapArray;
};

var filter = function(array, filter_func) {
  var returnArray = [];
  forEach(array, function(el) {
    if (filter_func(el)) { //if that element is validated by the filter_func
      returnArray.push(el); //push it into the array
    }
  });
  return returnArray;
};

var contains = function(arrayOrObj, searchValue) {
  for (key in arrayOrObj) {
    if (arrayOrObj.hasOwnProperty(key)) { //not necessary
      if (arrayOrObj[key] === searchValue) {
        return true;
      }
    }
  }
  return false;
};

var reduce = function(array, startVal, interatingFunction) {
  var currentVal = startVal; //this way we don't change the value of startVal
  
  forEach(array, function(num) {
    currentVal = interatingFunction(currentVal, num)
  });
  return currentVal;
};

var countWordsInReduce = function(currentVal, wordsArray) {
  return currentVal + countWords(wordsArray);
};

var sum = function(array) {
  var addFunc = function(currVal, newVal) {
    return currVal + newVal;
  };
  return reduce(array, 0, addFunc);
};

// cool version
var every = function(array, iteratingFunction) {
  return reduce(array, true, function(currVal, newVal) {
    return currVal && iteratingFunction(newVal);
  });
};

// clear version
var every = function(array, iteratingFunction) {
  for(var i=0; i<array.length; i++) {
    if (!iteratingFunction(array[i])) {
      return false;
    }
  }
  return true;
};

// cool version 2.0
var any = function(array, iteratingFunction) {
  if (typeof iteratingFunction === "undefined") {
    iteratingFunction = function(item) {
      return item;
    }
  };
  return reduce(array, false, function(currVal, newVal) {
    var returnBool = currVal || iteratingFunction(newVal);
    return returnBool;
  });
};

var once = function(inputFunc) {
  var calledAlready = false;
  return function() {
    if (!calledAlready) {
      inputFunc();
      calledAlready = true;
    }
  };
};


var wrapper = function(codeBlockFunction, blockWrapFunc) {
  return function() {
    return blockWrapFunc(codeBlockFunction);
  }
};



















