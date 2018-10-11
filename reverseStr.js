function reverseStr(str) {
    var newStr = "";
    for (var i = 1; i <= str.length; i++) {
        newStr += str[str.length - i];
    }
    return newStr;
}

var newStr = "";
var i = 1;
function reverseStr2(str) {
    if (str.length < i) {
        return newStr;
    }
    newStr += str.substr(str.length - i, 1);
    i++;
    reverseStr2(str);
    return newStr;
}