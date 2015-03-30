/**
 * hof.js by github.com/zg
 */

/**
 * _assert - a helper that throws an exception if condition is not met
 * @param condition the condition to check
 * @param the message to display (optional)
 */
_assert = function(condition, message) {
  if (!condition) {
    var message = message || "Assertion failed";
    if (typeof Error !== "undefined") {
      throw new Error(message);
    }
    throw message; // Fallback
  }
}

/**
 * average - compute the average of a given array of integers
 * @param arr the array containing integers
 * @return average of the values
 */
average = function(arr) {
  return reduce(arr, function(a, b) {
    return a + b;
  }, 0) / arr.length;
}

/**
 * every - checks if every element in arr has item
 * @param item the item to check
 * @return true if all items in arr are item, else false
 */
every = function(arr, item) {
  for(index in arr) {
    if(arr[index] !== item) {
      return false;
    }
  }
  return true;
}

/**
 * filter - return an array of items that meet a predicate
 * @param arr the array
 * @param pred the predicate
 * @return a filtered array
 */
filter = function(arr, pred) {
  var ret = [];
  for(index in arr) {
    if(pred(arr[index])) {
      ret.push(arr[index]);
    }
  }
  return ret;
}

/**
 * fold - aggregates all elements of an array based on a function, starting
 *    with some initial value
 * @param arr the array
 * @param func the function
 * @param init the initial value
 * @return the aggregation of all elements
 */
fold = function(arr, func, init) {
  var ret = init;
  for(index in arr) {
    ret = func(ret, arr[index]);
  }
  return ret;
}

/**
 * foldRight - aggregates all elements of an array, starting at the last
 *       index with an initial value, based on a function
 * @param arr the array
 * @param func the function
 * @param init the initial value
 * @return the aggregation of all elements
 */
foldRight = function(arr, func, init) {
  var ret = init;
  for(index in arr) {
    ret = func(ret, arr[arr.length - index - 1]);
  }
  return ret;
}

/**
 * forEach - applies a function to each element of arr
 * @param arr the array
 * @param func the function to run
 */
forEach = function(arr, func) {
  for(index in arr) {
    func(arr[index]);
  }
}

/**
 * groupBy - group elements of an array based on a grouping function
 * @param arr the array
 * @param grouping the grouping function
 * @return an array containing arrays of groupings
 */
groupBy = function(arr, grouping) {
  var ret = [];
  for(index in arr) {
  group = grouping(arr[index]);
  if(!ret[group]) {
    ret[group] = [];
  }
  ret[group].push(arr[index]);
  }
  return ret;
}

/**
 * map - map an array of elements to values based on a function
 * @param arr the array
 * @param func the mapping function
 * @return an array containing the mapping
 */
map = function(arr, func) {
  var ret = [];
  for(index in arr) {
    ret.push(func(arr[index]));
  }
  return ret;
}

/**
 * none - check if all elements in an array are not equal to item
 * @param arr the array
 * @param item the item to check
 * @return true if none of the elements match, else false
 */
none = function(arr, item) {
  for(index in arr) {
    if(arr[index] === item) {
      return false;
    }
  }
  return true;
}

/**
 * product - multiply all values of function from start to end
 * @param func the function
 * @param start the starting value
 * @param end the ending value
 * @return the product of all values between start and end
 */
product = function(start, end, func) {
  var func = func || function(x) {
    return x;
  };
  return fold(map(range(start, end + 1), func), function(a, b) {
    return a * b;
  }, 1);
}

/**
 * range - build a range of numbers between start and end, exclusive
 * @param start lower bound
 * @param end upper bound
 * @return an array of numbers between start and end, exclusive
 */
range = function(start, end, step) {
  _assert(!(step === 0), "Cannot take a step");
  var step = step || 1;
  _assert(!(start < end && step < 0), "Invalid range (infinite loop)");
  _assert(!(end < start && 0 < step), "Invalid range (infinite loop)");
  var ret = [];
  if(0 < step) {
    for(ret.push(start); ret[ret.length - 1] + step < end; ret.push(ret[ret.length - 1] + step));
  } else {
    for(ret.push(start); ret[ret.length - 1] + step > end; ret.push(ret[ret.length - 1] + step));
  }
  return ret;
}

/**
 * reduce - aggregates all elements of an array based on a function
 * @param arr the array
 * @param func the function
 * @return the aggregation of all elements
 */
reduce = function(arr, func) {
  return fold(arr, func, 0);
}

/**
 * reduceRight - aggregates all elements of an array, starting at the last
 *         index, based on a function
 * @param arr the array
 * @param func the function
 * @return the aggregation of all elements
 */
reduceRight = function(arr, func) {
  return foldRight(arr, func, 0);
}

/**
 * reverse - reverse elements in an array
 * @param arr the array
 * @return the reversed array
 */
reverse = function(arr) {
  var half = arr.length >> 1;
  for(index in arr) {
    if(index < half) {
      arr[arr.length - index - 1] ^= arr[index];
      arr[index] ^= arr[arr.length - index - 1];
      arr[arr.length - index - 1] ^= arr[index];
    }
  }
  return arr;
}

/**
 * some - check if an array has some element in it
 * @param arr the array
 * @param item the item to check
 * @return true if the array contains item, else false
 */
some = function(arr, item) {
  for(index in arr) {
    if(arr[index] === item) {
      return true;
    }
  }
  return false;
}

/**
 * sum - summation for all values of function from start to end
 * @param func the function
 * @param start the starting value
 * @param end the ending value
 * @return the summation of all values between start and end
 */
sum = function(start, end, func) {
  var func = func || function(x) {
    return x;
  };
  return reduce(map(range(start, end + 1), func), function(a, b) {
    return a + b;
  });
}
