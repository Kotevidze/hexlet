function reversInteger(n) {
    var strFromInt = n.toString();
    var newStr = "";
    var j = 0;
    if (strFromInt[j] == "-") {
        newStr += "-";
    }
    for (var i = strFromInt.length - 1; i >= 0; i--) {
        if (strFromInt[i] != "-") {
            newStr += strFromInt[i]; 
        }   
        else {
            newStr += "";
        }
    
    }
    return newStr;
}

var test = reversInteger(-312);
console.log(test);