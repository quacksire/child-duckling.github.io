//var body = document.getElementById("rainbow")
var r;
var g;
var b;

while (true) {


    if (r >= 200) {
        r = 0;
    }

    if (g >= 200) {
        g = 0;
    }

    if (b >= 200) {
        b = 0;
    }


    ////////////////////

    r = r + Math.random() * 10;
    g = g + Math.random() * 10;
    b = b + Math.random() * 10;

    ////////////////

    document.getElementById("rainbow").style = 'background: rgb(' + String(r) + ',' + String(g) + ',' + String(b) + ')';
}