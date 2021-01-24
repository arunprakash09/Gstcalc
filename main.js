document.getElementById("test").innerHTML = text;
function myfunction() {
    var percentage = parseInt(document.getElementById("per").value);
    var amount = parseInt(document.getElementById("amt").value);
    if (percentage == 12) {
        let res = amount * 100 / 112;
        document.getElementById("demo2").value = res;
        document.getElementById("demo1").value = res / 100 * percentage;
    }
    else {
        let res = amount * 100 / 112;
        document.getElementById("demo2").value = res + (res / 100 * percentage);
        document.getElementById("demo1").value = res / 100 * percentage;
    }
}
function clr() {
    document.getElementById("per").value = "";
    document.getElementById("amt").value = "";
    document.getElementById("demo1").value = "";
    document.getElementById("demo2").value = "";
}