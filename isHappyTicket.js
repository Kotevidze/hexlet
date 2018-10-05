function isHappyTicket(n) {
    if (typeof(n) == "number") {
        var str = String(n);
    } 
    else if (typeof(n) == "string") {
        var str = n;
    }
    if (str.length != 6) {
        return "Введите шестизначное число";
    }
    var leftPart = str.substr(0, 3);
    var rightPart = str.substr(3, 3);
    var leftSum = Number(leftPart[0]) + Number(leftPart[1]) + Number(leftPart[2]);
    var rightSum = Number(rightPart[0]) + Number(rightPart[1]) + Number(rightPart[2]);
    if (leftSum == rightSum) {
        return true;
    }
    else {
        return false;
    }
}