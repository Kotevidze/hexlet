function formattedTime(n) {
    var hours = 0;
    var minuts = 0;
    if (n < 10) {
        return hours + "0:0" + n;
    }
    else if (n < 60) {
        return hours + "0:" + n;
    }
    else if (n == 60) {
        return "01:00";
    }
    else if (n > 60) {
        var amountOfHours = Math.floor(n / 60);
        if (Number.isInteger(n / 60)) {
            return amountOfHours + ":00";
        }
       
        var amountOfMinuts = n - 60;
        while (amountOfMinuts > 60) {
            var temp = amountOfMinuts - 60;
            var amountOfMinuts = temp; 
        }
    }
    if (amountOfHours < 10 && amountOfMinuts < 10) {
        return "0" + amountOfHours + ":" + "0" + amountOfMinuts;
    }
    else if (amountOfHours < 10) {
        return "0" + amountOfHours + ":" + amountOfMinuts;
    }
    else if (amountOfMinuts < 10) {
        return amountOfHours + ":" + "0" + amountOfMinuts;
    }
    return amountOfHours + ":" + amountOfMinuts;
}