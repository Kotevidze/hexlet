function angleDifference(n, m) {
    if (n < 360 && m < 360) {
        var diff = m - n;
        if (diff < 0) {
            diff = n - m;
            if (diff > 180) {
                diff = (360 - n) + m;
            }
        }
        else if (diff > 180) {
            diff = (360 - m) + n;
        }
        return diff;
    }
    else {
        console.log("Введите угол < 360");
    }
}