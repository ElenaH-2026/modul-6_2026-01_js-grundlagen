/// Conditional Code

// "!" => NOT Operator
console.log("! NOT Operator")

let myCondition_NOT = true;
console.log(myCondition_NOT);   // -> true

myCondition_NOT = !myCondition_NOT;
console.log(myCondition_NOT);   // -> false


// "||" => OR Operator
console.log("|| OR Operator")

let myCondition_OR_1 = true || true;
console.log(myCondition_OR_1);   // -> true

let myCondition_OR_2 = false || false;
console.log(myCondition_OR_2);   // -> false

let myCondition_OR_3 = true || false;
console.log(myCondition_OR_3);   // -> true (bei OR genügt ein einziges TRUE um TRUE zu ergeben)

let myCondition_OR_4 = true || false || false;
console.log(myCondition_OR_4);   // -> true (bei OR genügt ein einziges TRUE um TRUE zu ergeben)


// "&&" => AND Operator
console.log("&& AND Operator")

let myCondition_AND_1 = true && true;
console.log(myCondition_AND_1);   // -> true

let myCondition_AND_2 = false && false;
console.log(myCondition_AND_2);   // -> false

let myCondition_AND_3 = true && false;
console.log(myCondition_AND_3);   // -> false (bei AND genügt ein einziges FALSE um FALSE zu ergeben)

let myCondition_AND_4 = true && false && false;
console.log(myCondition_AND_4);   // -> false (bei AND genügt ein einziges FALSE um FALSE zu ergeben)


// "&&" und "||" => Kombination aus AND und OR Operator
console.log("&& und ||")

let myCondition_AND_OR_1 = true || false && false;
console.log(myCondition_AND_OR_1);   // -> true 

let myCondition_AND_OR_2 = true && false || false;
console.log(myCondition_AND_OR_2);   // -> false

let myCondition_AND_OR_3 = true && true || false;
console.log(myCondition_AND_OR_3);   // -> true

let myCondition_AND_OR_4 = true || true && false;
console.log(myCondition_AND_OR_4);   // -> true (zuerst wird && ausgeführt und danach || - unabhängig von der Reihenfolge)

let myCondition_AND_OR_5 = false && true || true;
console.log(myCondition_AND_OR_5);   // -> true (zuerst wird && ausgeführt und danach || - unabhängig von der Reihenfolge)


// Test => am 13.01.2026 alles korrekt gelöst :D
console.log("Test && und ||")

console.log(true && false);   // -> false

console.log(true || false);   // -> true

console.log(false && true);   // -> false

console.log(true && (false || true));   // -> true

console.log((true && false) || true);   // -> true

console.log(!(true && false));   // -> true

console.log(!(false || true));   // -> false

console.log(!(true && (false || true)));   // -> false

console.log((true && !(false || true)) || (false && (true || false)));   // -> false = false || false = (true && false) || (false && true)

console.log((true || !(false && true)) && (!(true || false) || (false && true)));   // -> false = true && false = (true || true) && (false || false)


// "==" und "===" => GLEICH Operator
console.log("== und ===")

let myCondition_GLEICH_1 = 33 == 33;
console.log(myCondition_GLEICH_1);   // -> true

let myCondition_GLEICH_2 = 33 == "33";
console.log(myCondition_GLEICH_2);   // -> true (testet Gleichheit OHNE Datentyp)

let myCondition_GLEICH_3 = 33 === "33";
console.log(myCondition_GLEICH_3);   // -> false (testet Gleichheit MIT Datentyp)

let myCondition_GLEICH_4 = 33 == "dreiunddreißig";
console.log(myCondition_GLEICH_4);   // -> false


// "<", ">", "<=", ">=" => GRÖSSER / KLEINER Operator
console.log("<, >, <=, >=")

let myCondition_GRÖSSER = 33 > 33;
console.log(myCondition_GRÖSSER);   // -> false

let myCondition_GRÖSSER_GLEICH = 33 >= 33;
console.log(myCondition_GRÖSSER_GLEICH);   // -> true

let myCondition_KLEINER = 33 < 34;
console.log(myCondition_KLEINER);   // -> true


// "!=" und "!==" => NICHT-GLEICH Operator
console.log("!= und !==")

let myCondition_NICHT_GLEICH_1 = 33 != 33;
console.log(myCondition_NICHT_GLEICH_1);   // -> false

let myCondition_NICHT_GLEICH_2 = 33 != 34;
console.log(myCondition_NICHT_GLEICH_2);   // -> true

let myCondition_NICHT_GLEICH_3 = 33 != "33";
console.log(myCondition_NICHT_GLEICH_3);   // -> false (testet NICHT-Gleichheit OHNE Datentyp)

let myCondition_NICHT_GLEICH_4 = 33 !== "33";
console.log(myCondition_NICHT_GLEICH_4);   // -> true (testet NICHT-Gleichheit MIT Datentyp)


// Test => am 13.01.2026 alles korrekt gelöst :D
console.log("Test <, >, ==, !, &&, ||")

console.log(5 <= 10);   // -> true

console.log(15 == 15);   // -> true

console.log(20 > 10);   // -> true

console.log((7 <= 7) == (5 < 10));   // -> true = true == true

console.log((10 > 5) == (3 < 2));   // -> false = true == false

console.log((12 >= 8) && (8 < 9));   // -> true = true && true

console.log((3 == 3) || (10 > 20));   // -> true = true || false

console.log((6 != 6) || (15 <= 20));   // -> true = false || true

console.log((7 < 5) == !(10 >= 10));   // -> true = false == false

console.log((4 >= 4) && (8 < 15) && (3 == 3));   // -> true = true && true && true


// if, else, else if
console.log("if, else, else if")

let myIfCondition_1 = true;
let myIfCondition_2 = false;

if(myIfCondition_1) {
    console.log("hello world!");   // -> hello world!
}

if(myIfCondition_2) {
    console.log("hello world!");   // -> KEINE Ausgabe, da Bedingung = "false"
}

if(myIfCondition_2) {
    console.log("hello world!");   // -> KEINE Ausgabe, da Bedingung = "false"
} else {
    console.log("bye world!");   // -> bye world!
}

