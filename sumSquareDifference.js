function sumSquareDifference(n) {
    var sumOfSquares = 0;
    for (var i = 1; i <= n; i++) {
        sumOfSquares += i*i;
    }
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    var squareOfSum = sum * sum;
    var difference = squareOfSum - sumOfSquares;
    return difference;
}