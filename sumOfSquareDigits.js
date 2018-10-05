function isHappyNumber(n) {
    function sumOfSquareDigits (n) {
        var strFromNumber = n.toString();
        var res = 0;
        for (var j = 0; j < 10; j++) {
            for (var i = 0; i < strFromNumber.length; i++) {
                var square = strFromNumber[i] * strFromNumber[i];
                res += square;
            }
            strFromNumber = res.toString();
            res = 0;
        }
        return strFromNumber;
    }
    var result = sumOfSquareDigits(n);
    if (result == 1) {
        return true;
    } else {
        return false;
    }
}

var test = isHappyNumber(7);
console.log(test);
