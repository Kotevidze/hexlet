function areBracketsBalanced(str) {
    var arrBrackets = [];
    var arrIndex = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            arrBrackets.push({openedBrackets: true, closedBrackets: false});
            arrIndex.push(arrBrackets.length - 1);
        }
        if (str[i] == ")") {
            if (arrIndex.length != 0) {
                var index = arrIndex.pop();
                arrBrackets[index].closedBrackets = true;
            } else {
                return false;
            }
        }
    } 
    if (arrIndex.length == 0) {
        return true;
    } else {
        return false;
    }
   
}

var test = areBracketsBalanced("()((()))((()))");
console.log(test);