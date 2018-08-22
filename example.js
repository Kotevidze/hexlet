var test = "StDqw";
var upperCounter = 0;
var lowerCounter = 0;
for (i = 0; i < test.length; i++) {
    //debugger;
    if (test[i] == test[i].toUpperCase()) {
        console.log("upper case true");
        upperCounter++;
        console.log(upperCounter);
    }
    if (test[i] == test[i].toLowerCase()) {
        console.log("lower case true");
        lowerCounter++;
        console.log(lowerCounter);
    }
}
