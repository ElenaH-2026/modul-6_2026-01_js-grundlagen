

// "!" => NOT Operator

let myCondition_NOT = true;
console.log(myCondition_NOT);   // -> true

myCondition_NOT = !myCondition_NOT;
console.log(myCondition_NOT);   // -> false


// "||" = OR Operator

let myCondition_OR_1 = true || true;
console.log(myCondition_OR_1);   // -> true

myCondition_OR_2 = false || false;
console.log(myCondition_OR_2);   // -> false

myCondition_OR_3 = true || false;
console.log(myCondition_OR_3);   // -> true (bei OR genügt ein einziges TRUE um TRUE zu ergeben)

myCondition_OR_4 = true || false || false;
console.log(myCondition_OR_4);   // -> true (bei OR genügt ein einziges TRUE um TRUE zu ergeben)


// "&&" = AND Operator

let myCondition_AND_1 = true && true;
console.log(myCondition_AND_1);   // -> true

myCondition_AND_2 = false && false;
console.log(myCondition_AND_2);   // -> false

myCondition_AND_3 = true && false;
console.log(myCondition_AND_3);   // -> false (bei AND genügt ein einziges FALSE um FALSE zu ergeben)

myCondition_AND_4 = true && false && false;
console.log(myCondition_AND_4);   // -> false (bei AND genügt ein einziges FALSE um FALSE zu ergeben)


// "&&" und "||" = Kombination aus AND und OR Operator

myCondition_AND_OR_1 = true || false && false;
console.log(myCondition_AND_OR_1);   // -> true 

myCondition_AND_OR_2 = true && false || false;
console.log(myCondition_AND_OR_2);   // -> false

myCondition_AND_OR_3 = true && true || false;
console.log(myCondition_AND_OR_3);   // -> true

myCondition_AND_OR_4 = true || true && false;
console.log(myCondition_AND_OR_4);   // -> true (zuerst wird && ausgeführt und danach || - unabhängig von der Reihenfolge)

myCondition_AND_OR_5 = false && true || true;
console.log(myCondition_AND_OR_5);   // -> true (zuerst wird && ausgeführt und danach || - unabhängig von der Reihenfolge)