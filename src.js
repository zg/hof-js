average = function(arr) {
    return reduce(arr,function(a,b) {
        return a + b;
    }, 0) / arr.length;
}

every = function(arr, has) {
    for(item in arr) {
        if(arr[item] != has) {
            return false;
        }
    }
    return true;
}

forEach = function(arr, func) {
    for(item in arr) {
        func(arr[item]);
    }
}

filter = function(arr, pred) {
    var ret = [];
    for(item in arr) {
        if(pred(arr[item])) {
            ret.push(arr[item]);
        }
    }
    return ret;
}

groupBy = function(arr, grouping) {
  ret = [];
  for(item in arr) {
      group = grouping(arr[item]);
      if(!ret[group]) {
          ret[group] = [];
      }
      ret[group].push(arr[item]);
  }
  return ret;
}

map = function(arr, func) {
    var ret = [];
    for(item in arr) {
        ret.push(func(arr[item]));
    }
    return ret;
}

none = function(arr, has) {
    for(item in arr) {
        if(arr[item] === has) {
            return false;
        }
    }
    return true;
}

reduce = function(arr, func, init) {
    var ret = init;
    for(item in arr) {
        ret = func(ret, arr[item]);
    }
    return ret;
}

reverse = function(arr) {
    half = arr.length >> 1;
    for(item in arr){
        if(item < half) {
            arr[arr.length - item - 1] ^= arr[item];
            arr[item] ^= arr[arr.length - item - 1];
            arr[arr.length - item - 1] ^= arr[item];
        }
    }
    return arr;
}

some = function(arr, has) {
    for(item in arr) {
        if(arr[item] == has) {
            return true;
        }
    }
    return false;
}

var tests = [
    average([1,2,3,4]),
    every([1,1,1,1], 1),
    filter([1,2,3,4], function(x) {
        return x % 2 == 0;
    }),
    groupBy([1,2,3,4], function(x) {
        return x % 2 == 0;
    }),
    map([1,2,3,4], function(x) {
        return x * x;
    }),
    none([1,2,3,4], 5),
    reduce([1,2,3,4], function(x, y) {
        return x + y;
    }, 0),
    reverse([1,2,3,4,5]),
    some([1,2,3,4], 3)
];

forEach(tests,function(x){console.log(x)})
