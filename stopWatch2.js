var i = document.getElementById("timer");
var h = 0;
var m = 0;
var s = 0;
var stopper = true;

function start() {
    if (stopper == true) {
        stopper = false;
        cycle();
    }
}

function stop() {
    if (stopper == false) {
        stopper = true;
    }
}

function cycle() {
    if (stopper == false) {
        s = parseInt(s);
        m = parseInt(m);
        h = parseInt(h);
        s = s + 1;
        if (s == 60) {
            m = m + 1;
            s = 0;
        }
        if (m == 60) {
            h = h + 1;
            m = 0;
            s = 0;
        }
        if (s < 10 || s == 0) {
            s = '0' + s;
        }
        if (m < 10 || m == 0) {
            m = '0' + m;
        }
        if (h < 10 || h == 0) {
            h = '0' + h;
        }
        i.innerHTML = h + ":" + m + ":" + s;
        setTimeout("cycle()", 10);
    }
}

function reset() {
    i.innerHTML = "00:00:00";
    stopper = true;
    h = 0;
    s = 0;
    m = 0;
}