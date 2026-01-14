/// Functions
console.log("/// Functions");

// Function mit globalen Variablen
console.log("// Function mit globalen Variablen");
let discount = 50;
let price = 500;

console.log((price - discount) * 1.19)   // -> 535.5
logCalculatePrice_globaleVariablen();   // -> 535.5 
// -> !! Funktionen werden auch ausgeführt, wenn sie weiter unten im Code definiert wurden
// -> !! Variablen können nur von oben nach unten berücksichtigt werden !!

price = 400;

function logCalculatePrice_globaleVariablen() {
    console.log((price - discount) * 1.19);
}

logCalculatePrice_globaleVariablen();   // -> 416.5


// Function mit Parametern
console.log("// Function mit Parametern");

function logCalculatePrice_Parameter(discount, price, tax) {
    console.log((price - discount) * tax);
}

logCalculatePrice_Parameter(20, 300, 1.19);   // -> 333.2


// Function mit "return"
console.log("// Function mit return");

function logCalculatePrice(discount, price, tax) {
    let value = ((price - discount) * tax);
    
    return ("Calculated Price: " + value);
}

console.log(logCalculatePrice(10, 900, 1.19));


// => Weiterführende Links:
// Tutorial "JS Functions" von w3schools
// https://www.w3schools.com/js/js_functions.asp