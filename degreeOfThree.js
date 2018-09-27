function isPowerOfThree (n) {
    var a = 1;
    while (a < n) {
        a *= 3;
    }
    if (a == n) {
        return true;
    } else if (a > n) {
        return false;
    }
}