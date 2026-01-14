/// Strings and Numbers
console.log("/// Strings and Numbers");

// Rechenoperationen mit Numbers
console.log("// Rechenoperationen mit Numbers");

let myDivision = 10 / 5;
console.log(myDivision);   // -> 2

let myMulty = 10 * 5;
console.log(myMulty);   // -> 50

let myAdd = 10 + 5;
console.log(myAdd);   // -> 15

let mySub = 10 - 5;
console.log(mySub);   // -> 5

let myPow = 2 ** 3;  // power of (Hochzahl/Potenzen) z.B. 2^3
console.log(myPow);   // -> 8


// Rechenoperationen mit Strings (nur + möglich)
console.log("// Rechenoperationen mit Strings");

let myMerge1 = "hello" + " world!";
console.log(myMerge1);   // -> hello world!

let myMerge2 = "hello" - " world!";
console.log(myMerge2);   // -> NaN !!!

let myMerge3 = "hello" * " world!";
console.log(myMerge3);   // -> NaN !!!

let myMerge4 = "hello" / " world!";
console.log(myMerge4);   // -> NaN !!!


// Kombination aus Numbers und Strings
console.log("// Kombination aus Numbers und Strings");

let myCombo1 = 5 + " Jahre";
console.log(myCombo1);   // -> 5 Jahre

let myCombo2 = 5 + "4";
console.log(myCombo2);   // -> 54 !!!

let myCombo3 = 5 - "4";
console.log(myCombo3);   // -> 1 (JS macht aus string automatisch eine number)

let myCombo4 = 5 - "4,5";
console.log(myCombo4);   // -> NaN !!!

let myCombo5 = 5 - "4.2";
console.log(myCombo5);   // -> 0.7999999999999998 (!! Ungenauigkeit von Rechenmaschinen)

let myCombo6 = 5 - 4.2;
console.log(myCombo6);   // -> 0.7999999999999998

// => Weiterführende Links:
// Tutorial "JS Strings" von w3schools
// https://www.w3schools.com/js/js_strings.asp


// Properties und Methods für Strings
// (https://www.w3schools.com/jsref/jsref_obj_string.asp)
console.log("Properties und Methods für Strings");

// ".length" => Properties zur Zählung von Zeichen
// (https://www.w3schools.com/jsref/jsref_length_string.asp)

// ".trim()" => Methods zur Entfernung aller Leerzeichen in einem String
// (https://www.w3schools.com/jsref/jsref_trim_string.asp)

let myTestString = "     hello    ";
console.log(myTestString);   // -> hello
console.log(myTestString.length);   // -> 14 !! Achtung. Es werden alle Zeichen des Strings gezählt. Auch die Leerzeichen.

myTestString = myTestString.trim();
console.log(myTestString.length);   // -> 5