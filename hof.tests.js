arraysEqual = function(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length != b.length)
        return false;
    for(index in a) {
        if(Object.prototype.toString.call(a[index]) == "[object Array]") {
            if(!arraysEqual(a[index],b[index]))
                return false;
        }
        else if (a[index] !== b[index])
            return false;
    }
    return true;
}

objToArray = function(obj) {
    var ret = [];
    for(item in obj)
        ret[item] = obj[item];
    return ret;
}

var tests = [
    ["average",average([1,2,3,4]),2.5],
    ["every",every([1,1,1,1],1),true],
    ["filter",filter([1,2,3,4],function(x){return x % 2 == 0}),[2,4]],
    ["fold",fold(['1',2,'3',4,5],function(a,b){return a+b},0),"012345"],
    ["foldRight",foldRight(['1',2,'3',4,5],function(a,b){return a+b},0),"9321"],
    ["groupBy",groupBy([3.14,3.65,10,10.4,15],function(x){return Math.round(x)}),objToArray({3:[3.14],4:[3.65],10:[10,10.4],15:[15]})],
    ["map",map(["John","Apple","Seed"],function(x){return x.length}),[4,5,4]],
    ["none",none([0,2,3,4,5],1),true],
    ["product",product(1,5,function(x){return x*x}),14400],
    ["range",range(5,3,-3),[5]],
    ["reduce",reduce([1,2,3,4],function(a,b){return a+b}),10],
    ["reduceRight",reduceRight(['1',2,'3',4,5],function(a,b){return a+b}),"9321"],
    ["reverse",reverse([1,2,3,4,5]),[5,4,3,2,1]],
    ["some",some([1,2,3,4,5],2),true],
    ["sum",sum(1,5,function(x){return x*x*x}),225]
];

var test_count = tests.length;
var pass_count = 0;

for(test in tests) {
    var passed = false;
    var name = tests[test][0];
    var result = tests[test][1];
    var expect = tests[test][2];
    var result_type = Object.prototype.toString.call(result);
    var expect_type = Object.prototype.toString.call(expect);
    var type_mismatch = result_type !== expect_type;
    switch(Object.prototype.toString.call(expect)) {
        case "[object Array]":
            if(arraysEqual(result,expect)) {
                passed = true;
                pass_count++;
            }
            console.log("[" + (passed ? "PASS" : "FAIL") + "] " + name + ", expect: [" + expect + "], result: [" + result + "]" + (type_mismatch ? " (type mismatch)" : ""));
        break;
        default:
            if(result === expect) {
                passed = true;
                pass_count++;
            }
            console.log("[" + (passed ? "PASS" : "FAIL") + "] " + name + ", expect: " + expect + ", result: " + result + (type_mismatch ? " (type mismatch)" : ""));
        break;
    }
}

console.log(pass_count+"/"+test_count+" tests passed.");
