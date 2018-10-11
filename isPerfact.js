function isPerfect(n) {
    var sumOfDivisor = 0;
    for (var i = 1; i < n; i++) {
        if (n % i == 0) {
            sumOfDivisor += i;
        } 
    }
    if (sumOfDivisor == n) {
        return true;
    } 
    else {
        return false;
    }
}