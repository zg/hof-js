function forEach(arr, func) {
    for(var i = 0; i < arr.length; i++)
        func(arr[i])
}

function filter(arr, test) {
    var ret = [];
    for(var i = 0; i < arr.length; i++)
        if(test(arr[i]))
            ret.push(arr[i])
    return ret
}

function map(arr, func) {
    var ret = [];
    for(var i = 0; i < arr.length; i++)
        ret.push(func(arr[i]))
    return ret
}

function reduce(arr, func, init) {
    var ret = init;
    for(var i = 0; i < arr.length; i++)
        ret = func(ret, arr[i])
    return ret
}

var tests = [
    filter([1,2,3,4],function(x){return x%2==0}),
    map([1,2,3,4],function(x){return x*x}),
    reduce([1,2,3,4],function(x,y){return x+y},0)
];

forEach(tests,function(x){console.log(x)})
