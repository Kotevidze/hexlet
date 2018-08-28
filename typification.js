const addDigits = function(num) {
    var strNum = String(num);
    var sum = 0;
    for (var i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i]);
    } 
    if (sum < 10) {
        return sum;
    } 
    else {
        return addDigits(sum);
    }
}
var result = addDigits(38);
console.log(result);