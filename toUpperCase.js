function solution (str) {
    var arrFromStr = str.split(" ");
    var result = "";
    for (var i = 0; i < arrFromStr.length; i++) {
        if (arrFromStr[i].length == 0) {
            result += " ";
            continue;
        }
        var firstChar = arrFromStr[i][0].toUpperCase();
        var remainder = arrFromStr[i].substring(1);
        if (i == arrFromStr.length - 1) {
            result += firstChar + remainder;
        } else {
            result += firstChar + remainder + " ";
        }
    }
    return result;
  }

  var test = solution("   hello, world!  ");
  console.log(test);
