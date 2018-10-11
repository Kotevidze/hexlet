function dnaToRna(str) {
    var newStr = "";
    if (str == "") {
        return "''";
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "G" && str[i] != "C" && str[i] != "T" && str[i] != "A") {
            return null;
        }
        if (str[i] == "G") {
            newStr += "C";
        }
        else if (str[i] == "C") {
            newStr += "G";
        }
        else if (str[i] == "T") {
            newStr += "A";
        }
        else if (str[i] == "A") {
            newStr += "U";
        } 
    }
    return newStr;
}