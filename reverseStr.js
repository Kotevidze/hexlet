function reverseStr(str) {
    var newStr = "";
    for (var i = 1; i <= str.length; i++) {
        newStr += str[str.length - i];
    }
    return newStr;
}

var str = "test";
var test = reverseStr(str);
console.log(test);