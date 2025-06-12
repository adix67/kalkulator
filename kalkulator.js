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

let c = document.getElementById("wyczysc");
let display = document.getElementById("display");

let znaki = ["*", "/", "+", "%", "(", ")", "-"];
let kropka = ".";

j.addEventListener("click", function() {
    display.value += 1;
});

d.addEventListener("click", function() {
    display.value += 2;
});

t.addEventListener("click", function() {
    display.value += 3;
});

cz.addEventListener("click", function() {
    display.value += 4;
});

p.addEventListener("click", function() {
    display.value += 5;
});

sz.addEventListener("click", function() {
    display.value += 6;
});

si.addEventListener("click", function() {
    display.value += 7;
});

o.addEventListener("click", function() {
    display.value += 8;
});

dz.addEventListener("click", function() {
    display.value += 9;
});

z.addEventListener("click", function() {
    if (display.value != "0") {
        display.value += 0;
    } else {
        display.value += "";
    }
});

koma.addEventListener("click", function() {
    let niedodawac = display.value.split(new RegExp(`[${znaki.join("")}]`)); //Rozdzielenie (split) wyrażenia na części po operatorach
    let dlugosc = niedodawac[niedodawac.length - 1];
    if (znaki.includes(display.value.charAt(display.value.length - 1))) {
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
    if (display.value == "") {
        display.value += "";
    } else if (znaki.includes(display.value.charAt(display.value.length - 1)) || kropka.includes(display.value.charAt(display.value.length - 1))) { //Sprawdzenie czy ostatnim znakiem nie jest kropka lub jeden z operatorów i innych tego typu
        display.value += "";
    } else {
        display.value += "+";
    }
});

rowne.addEventListener("click", function() {
    if (znaki.includes(display.value.charAt(display.value.length - 1))) {
        display.value = display.value.slice(0, -1);
        display.value = eval(display.value); //Obliczanie i wyświetlanie wyniku
    } else {
        display.value = eval(display.value);
    }
});