function clock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    hours = checkZeros(hours);
    minutes = checkZeros(minutes);

    document.getElementById("clock").innerHTML = "<h1>" + hours + "<sup>" +
        minutes + "</sup></h1>";
}

function checkZeros(t) {
    if (t < 10)
        t = "0" + t;
    return t;
}