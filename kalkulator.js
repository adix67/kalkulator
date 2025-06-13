let j = document.getElementById("jeden");
let d = document.getElementById("dwa");
let t = document.getElementById("trzy");
let cz = document.getElementById("cztery");
let p = document.getElementById("piec");
let sz = document.getElementById("szesc");
let si = document.getElementById("siedem");
let o = document.getElementById("osiem");
let dz = document.getElementById("dziewiec");
let z = document.getElementById("zero");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mnoz = document.getElementById("pomnoz");
let dziel = document.getElementById("podziel");
let rowne = document.getElementById("rownasie");

let proc = document.getElementById("procent");
let lnaw = document.getElementById("lnaw");
let koma = document.getElementById("koma");
let pnaw = document.getElementById("pnaw");

let ce = document.getElementById("wyczysc");
let display = document.getElementById("display");

let cyfry = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let znaki = ["*", "/", "+", "-"];
let kropka = ".";
let lnawias = "(";
let pnawias = ")";

j.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "1"
    } else {
        display.value += 1;
    }
});

d.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "2"
    } else {
        display.value += 2;
    };
});

t.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "3"
    } else {
        display.value += 3;
    }
});

cz.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "4"
    } else {
        display.value += 4;
    }
});

p.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "5"
    } else {
        display.value += 5;
    }
});

sz.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "6"
    } else {
        display.value += 6;
    }
});

si.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "7"
    } else {
        display.value += 7;
    }
});

o.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "8"
    } else {
        display.value += 8;
    }
});

dz.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak) && !kropka.includes(ostatniZnak) && !cyfry.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "9"
    } else {
        display.value += 9;
    }
});

z.addEventListener("click", function() {
    if (display.value != "0") {
        display.value += 0;
    } else {
        display.value += "";
    }
});

koma.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    let niedodawac = display.value.split(new RegExp(`[${znaki.join("")}]`)); //Rozdzielenie (split) wyrażenia na części po operatorach
    let dlugosc = niedodawac[niedodawac.length - 1];
    if (znaki.includes(ostatniZnak) || lnawias.includes(ostatniZnak) || pnawias.includes(ostatniZnak)) {
        display.value += "";
    } else if (display.value == "") {
        display.value += "";
    } else if (dlugosc.includes(".")) {
        display.value += "";
    } else {
        display.value += ".";
    }
});

plus.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak) || lnawias.includes(ostatniZnak)) { 
        display.value += "";
    } else {
        display.value += "+";
    }
});

minus.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak)) { //Sprawdzenie czy ostatnim znakiem nie jest kropka lub jeden z operatorów i innych tego typu
        display.value += "";
    } else {
        display.value += "-";
    }
});

mnoz.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak) || lnawias.includes(ostatniZnak)) {
        display.value += "";
    } else {
        display.value += "*";
    }
});

dziel.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak) || lnawias.includes(ostatniZnak)) {
        display.value += "";
    } else {
        display.value += "/";
    }
});

lnaw.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value != "" && !znaki.includes(ostatniZnak) && !lnawias.includes(ostatniZnak)) {
        display.value += "*";
        display.value += "(";
    } else {
        display.value += "(";
    }
});

pnaw.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    let niedodawac = display.value.split(new RegExp(`[${znaki.join("")}]`)); //Rozdzielenie (split) wyrażenia na części po operatorach
    let dlugosc = niedodawac[niedodawac.length - 1];
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak) || lnawias.includes(ostatniZnak)) {
        display.value += "";
    } else {
        display.value += ")";
    }
});

proc.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(ostatniZnak) || kropka.includes(ostatniZnak) || lnawias.includes(ostatniZnak)) {
        display.value += "";
    } else {
        display.value += "*0.01";
    }
});

rowne.addEventListener("click", function() {
    let ostatniZnak = display.value.charAt(display.value.length - 1);
    try {
        if (znaki.includes(ostatniZnak)) {
            display.value = display.value.slice(0, -1);
            display.value = eval(display.value); //Obliczanie i wyświetlanie wyniku
        } else {
            display.value = eval(display.value);
        }
    }
    catch(err) {
        alert(err.message);
    }
});

ce.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
});

document.addEventListener("keydown", function(ev) {
    if (ev.key == "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});

