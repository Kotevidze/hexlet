function square (n) {
    return n * n;
  };
  function sumOfSquares(a, b) {
    return square(a) + square(b);
  };
  function squareSumOfSquares(c, d) {
    var e = square(c) + square(d);
    return square(e);
  };
  var sq = square(5);
  console.log(sq);
  var sq2 = sumOfSquares(2, 3);
  console.log(sq2);
  var sq3 = squareSumOfSquares(2, 1);
  console.log(sq3);