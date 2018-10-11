function fizzBuzz(n, m) {
    if (n < m) {
        for (var i = n; i <= m; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            }
            else if (i % 3 == 0) {
                console.log("Fizz");
            }
            else if (i % 5 == 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }
}
var test = fizzBuzz(20, 11);
console.log(test);