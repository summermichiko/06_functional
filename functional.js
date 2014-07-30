function countWords(sentence) {
  return sentence.split(" ").length;
}
  
function makeAdder(num1) {
  // this variable will be "closed upon" aka, it will be kept alive
  // num1 = 2 
  var adderof2Function = function (num2) {
    return num1+num2;
  };
  return adderof2Function;
}

function forEach(array, funcRunOnEachElement) {
  for (var i = 0; i < array.length; i++) {
    funcRunOnEachElement(array[i]);
  }
}

function map(array, funcRunOnEachElement) {
  var newMapArray = [];
  for(var i =0; i<array.length; i++){
    newMapArray.push(func(arr[i]))
  }
  return newMapArray;
}

function filter(array, filter_func) {
  var returnArray = [];
  forEach(array, function(el) {
    if (filter_func(el)) {
      returnArray.push(el);
    }
  });
  return returnArray;
}

function contains(arrayOrObj, searchValue) {
  for (key in arrayOrObj) {
    if (arrayOrObj.hasOwnProperty(key)) {
      if (arrayOrObj[key] === searchValue) {
        return true;
      }
    }
  }
  return false;
}

function reduce(array, startVal, interatingFunction) {
  var currentVal = startVal;
  
  forEach(array, function(num) {
    currentVal = interatingFunction(currentVal, num)
  });
  return currentVal;
}

function countWordsInReduce(currentVal, wordsArray) {
  return currentVal + countWords(wordsArray);
}

function sum(array) {
  var addFunc = function(currVal, newVal) {
    return currVal + newVal;
  };
  return reduce(array, 0, addFunc);
}

// cool version
function every(array, iteratingFunction) {
  return reduce(array, true, function(currVal, newVal) {
    return currVal && iteratingFunction(newVal);
  });
}

// clear version
function every(array, iteratingFunction) {
  for(var i=0; i<array.length; i++) {
    if (!iteratingFunction(array[i])) {
      return false;
    }
  }
  return true;
}

// cool version 2.0
function any(array, iteratingFunction) {
  if (typeof iteratingFunction === "undefined") {
    iteratingFunction = function(item) {
      return item;
    }
  }
  return reduce(array, false, function(currVal, newVal) {
    var returnBool = currVal || iteratingFunction(newVal);
    return returnBool;
  });
}

function once(inputFunc) {
  var calledAlready = false;
  return function() {
    if (!calledAlready) {
      inputFunc();
      calledAlready = true;
    }
  };
}


function wrapper(codeBlockFunction, blockWrapFunc) {
  return function() {
    return blockWrapFunc(codeBlockFunction);
  }
}



















