//// Arrays und Schleifen
console.log("/// Arrays und Schleifen");

// https://www.w3schools.com/js/js_arrays.asp

/// Arrays: Basics
console.log("// Arrays: Basics");

let myData = [34, 'Elena', true];

function initArraysBasics() {
    console.log(myData);  // -> (3) [34, 'Elena', true]
    console.log(myData[1]);  // -> Elena
    myData[1] += " Hiener"
    console.log(myData[1]);  // -> Elena Hiener
    console.log(myData);  // -> (3) [34, 'Elena Hiener', true]
}

/// Arrays: entries und das 'empty'
console.log("// Arrays: entries und das 'empty'");

let myCars = [];

myCars[0] = "BMW";

myCars[2] = "Audi";

function initArraysEmpty() {
    console.log(myCars);  // -> (3) ['BMW', empty, 'Audi'] // 0: "BMW" // 2: "Audi" // length: 3
}

// 'empty' wollen wir NICHT!! So also nicht machen!!


/// Arrays: pop() und push()
console.log("// Arrays: pop() und push()");
// https://www.w3schools.com/jsreF/jsref_push.asp
// https://www.w3schools.com/jsref/jsref_pop.asp

let friends = ["Nimat", "Claire", "Björn"];
friends.push("Anja");
let newFriend = friends.push("Vanessa");

function initArraysFriends() {
    console.log(friends);  // -> (5) ['Nimat', 'Claire', 'Björn', 'Anja', 'Vanessa']
    console.log(newFriend);  // -> 5
    friends.push("Louis");
    console.log(friends);  // -> (6) ['Nimat', 'Claire', 'Björn', 'Anja', 'Vanessa', 'Louis']
    let oldFriend = friends.pop();
    console.log(friends);  // -> (5) ['Nimat', 'Claire', 'Björn', 'Anja', 'Vanessa']
    console.log(oldFriend);  // -> Louis
}

// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.


/// Aufgabe 1: Arrays: includes()
console.log("// Aufgabe 1: Arrays: includes");

// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

// Test:
// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false

let names = ['Anna', 'Ben', 'Clara']

function containsElement(array, element) {
    if (array.includes(element, 2)) {
        return array.includes(element, 2);
    }
    else {
        return array.includes(element);
    }
}

function initArraysIncludes() {
    console.log(containsElement(names, 'Ben')); // -> true => RICHTIG, allerdings erst bei der else-Bedingung!!
    console.log(containsElement(names, 'ben')); // -> false => RICHTIG, weil flasch (klein) geschrieben.
    console.log(containsElement(names, 'Daniel')); // -> false => RICHTIG
}

// https://www.w3schools.com/jsref/jsref_includes_array.asp
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.


/// Aufgabe 2: Arrays: indexOf()
console.log("// Aufgabe 2: Arrays: indexOf");

// Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.

// Test:
// console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
// console.log(findElementIndex([10, 20, 30, 40], 50)); // -1

let numbers = [10, 20, 30, 40]

function findElementIndex(array, element) {
    return array.indexOf(element);
}

function initArraysIndexOf() {
    console.log(findElementIndex(numbers, 30)); // -> 2 => RICHTIG
    console.log(findElementIndex(numbers, 50)); // -> -1 => RICHTIG
}

// https://www.w3schools.com/jsref/jsref_indexof_array.asp
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).


/// Aufgabe 3: Arrays: shift()
console.log("// Aufgabe 3: Arrays: shift");

// Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

// Test:
// console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
// console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']

let letters = ['a', 'b', 'c', 'd']

function removeFirstElement(array) {
    console.log(array.shift()); // -> 10 bzw. a => RICHTIG
    return array;
}

function initArraysShift() {
    console.log(removeFirstElement(numbers)); // -> (3) [20, 30, 40] => RICHTIG
    console.log(removeFirstElement(letters)); // -> (3) ['b', 'c', 'd'] => RICHTIG
}

// https://www.w3schools.com/jsref/jsref_shift.asp
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.


/// Aufgabe 4: Arrays: unshift()
console.log("// Aufgabe 4: Arrays: unshift");

// Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

// Test:
// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
// console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

function addElementToStart(array, element) {
    array.unshift(element);
    return array;
}

function initArraysUnshift() {
    console.log(numbers); // -> (4) [10, 20, 30, 40]
    console.log(addElementToStart(numbers, 1)); // -> (5) [1, 10, 20, 30, 40] => RICHTIG
    console.log(letters); // -> (4) ['a', 'b', 'c', 'd']
    console.log(addElementToStart(letters, 'a')); // -> (5) ['a', 'a', 'b', 'c', 'd'] => RICHTIG
}

// https://www.w3schools.com/jsref/jsref_unshift.asp
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.


/// Aufgabe 5: Arrays: slice()
console.log("// Aufgabe 5: Arrays: slice");

// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.

// Test:
// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
// console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

let newNumbers = [1, 2, 3, 4, 5]
let newLetters = ['a', 'b', 'c', 'd', 'e']

function getSubArray(array, start, end) {
    return array.slice(start, end);
}

function initArraysSlice() {
    console.log(newNumbers); // -> (5) [1, 2, 3, 4, 5]
    console.log(getSubArray(newNumbers, 1, -1)); // -> (3) [2, 3, 4] => RICHTIG
    console.log(newNumbers); // -> (5) [1, 2, 3, 4, 5]

    console.log(newLetters); // -> (5) ['a', 'b', 'c', 'd', 'e']
    console.log(getSubArray(newLetters, 0, 3)); // -> (3) ['a', 'b', 'c'] => RICHTIG
    console.log(newLetters); // -> (5) ['a', 'b', 'c', 'd', 'e']
}

// https://www.w3schools.com/jsref/jsref_slice_array.asp
// The slice() method returns selected elements in a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// !!!! The slice() method does not change the original array.


/// Aufgabe 6: Arrays: join()
console.log("// Aufgabe 6: Arrays: join");

// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

// Test:
// console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"
// console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"

let fruits = ['apple', 'banana', 'cherry']

function joinArray(array, separator) {
    return array.join(separator)
}

function initArraysJoin() {
    console.log(joinArray(fruits)); // -> apple,banana,cherry => RICHTIG
    console.log(fruits); // -> (3) ['apple', 'banana', 'cherry']
    console.log(joinArray(newNumbers, ' - ')); // -> 1 - 2 - 3 - 4 - 5 => RICHTIG
    console.log(newNumbers); // -> (5) [1, 2, 3, 4, 5]
}

// https://www.w3schools.com/jsref/jsref_join.asp
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).



/// for-Schleife: Basics
console.log("// for-Schleife: Basics");

// for (start; solange; schritt) {}

let arrayFruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']

function initLoopsBasics() {
    console.log(arrayFruits);
    console.log('-> indexFruits++');
    for (let indexFruits = 0; indexFruits < 5; indexFruits++) { // index++ => index += 1 => index = index + 1
        console.log(indexFruits + " - " + arrayFruits[indexFruits]);  
    }
    console.log('-> indexFruits += 2');
    for (let indexFruits = 0; indexFruits < 8; indexFruits += 2) { 
        console.log(indexFruits + " - " + arrayFruits[indexFruits]);  
    }
}


/// for-Schleife: Interation durch Arrays
console.log("// for-Schleife: Interation durch Arrays");

function initLoopsArray() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let indexFruits = 0; indexFruits < arrayFruits.length; indexFruits++) {
        contentRef.innerHTML += `<p>+ ${arrayFruits[indexFruits]}</p>`;
    }
}


/// for-Schleife: Aufgabe 1 'Summe der Elemente eines Arrays'
console.log("// for-Schleife: Aufgabe 1 'Summe der Elemente eines Arrays'");

// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.

// Test:
// console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)
// console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)

let testArray_1 = [3, 7, 1, 4];
let testArray_2 = [1, 2, 3, 4, 5];

function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

function initLoopsTask_1() {
    console.log(sumArray(testArray_1)); // -> 15 => RICHTIG
    console.log(sumArray(testArray_2)); // -> 15 => RICHTIG
}


/// for-Schleife: Aufgabe 2 'Ausgabe einer Zahlenreihe'
console.log("// for-Schleife: Aufgabe 2 'Ausgabe einer Zahlenreihe'");

// Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.

// Test:
// printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5
// printNumbers(3); // Erwartete Ausgabe: 1, 2, 3

function printNumbers(n) {
    let numbers = "1";
    for (let i = 2; i <= n; i++) {
        numbers = numbers + ", " + i;
    }
    return numbers;
}

function initLoopsTask_2() {
    let contentRef = document.getElementById('loop_task_2');
    contentRef.innerHTML = "";
    contentRef.innerHTML += `<p>${printNumbers(5)}</p>`; // -> 1, 2, 3, 4, 5 => RICHTIG
    contentRef.innerHTML += `<p>${printNumbers(3)}</p>`; // -> 1, 2, 3 => RICHTIG
}


/// for-Schleife: Aufgabe 3 'Rückwärts laufende for-Schleife'
console.log("// for-Schleife: Aufgabe 3 'Rückwärts laufende for-Schleife'");

// Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.

// Test:
// printNumbersReverse(5); // Erwartete Ausgabe: 5, 4, 3, 2, 1
// printNumbersReverse(3); // Erwartete Ausgabe: 3, 2, 1

function printNumbersReverse(n) {
    let numbers = n;
    for (let i = (n-1); i >= 1; i--) {
        numbers = numbers + ", " + i;
    }
    return numbers;
}

function initLoopsTask_3() {
    let contentRef = document.getElementById('loop_task_3');
    contentRef.innerHTML = "";
    contentRef.innerHTML += `<p>${printNumbersReverse(5)}</p>`; // -> 5, 4, 3, 2, 1 => RICHTIG
    contentRef.innerHTML += `<p>${printNumbersReverse(3)}</p>`; // -> 3, 2, 1 => RICHTIG
}


/// for-Schleife: Aufgabe 4 'Nur jedes dritte Element ausgeben'
console.log("// for-Schleife: Aufgabe 4 'Nur jedes dritte Element ausgeben'");

// Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.

// Test:
// printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Erwartete Ausgabe: 1, 4, 7
// printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']); // Erwartete Ausgabe: 'a', 'd'

let task4_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let task4_letters = ['a', 'b', 'c', 'd', 'e', 'f'];

function printEveryThirdElement(array) {
    let everyThirdElement = array[0]
    for (let index = 3; index < array.length; index += 3) {
        everyThirdElement = everyThirdElement + ", " + array[index];
    }
    return everyThirdElement;
}

function initLoopsTask_4() {  
    let contentRef = document.getElementById('loop_task_4');
    contentRef.innerHTML = "";
    contentRef.innerHTML += `<p>${printEveryThirdElement(task4_numbers)}</p>`; // -> 1, 4, 7 => RICHTIG
    contentRef.innerHTML += `<p>${printEveryThirdElement(task4_letters)}</p>`; // -> a, d => RICHTIG
}


/// for-Schleife: Bonusaufgabe 'Prüfung auf Primzahlen'
console.log("// for-Schleife: Bonusaufgabe 'Prüfung auf Primzahlen'");

// Implementiere eine for-Schleife, um zu überprüfen, ob die gegebene Zahl eine Primzahl ist (d.h. nur durch 1 und sich selbst teilbar ist). Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.

// Test:
// console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)
// console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)

function isPrime(nr) {
    let divisors = [];

    if (nr == 1) {
        return "false (" + nr + " ist keine Primzahl)";
    }

    for (let d = 2; d < nr; d++) {
        divisors.push(d);
    }
    console.log(divisors);
    
    for (let index = 0; index < divisors.length; index++) {
        let q = nr / divisors[index]
        if (divisors.includes(q)) {
           return "false (" + nr + " ist keine Primzahl)"; 
        } 
    }
    return "true (" + nr + " ist eine Primzahl)";
}

function initLoopsTask_B1() {
    console.log(isPrime(7)); // -> true (7 ist eine Primzahl) => RICHTIG
    console.log(isPrime(4)); // -> false (4 ist keine Primzahl) => RICHTIG
    console.log(isPrime(16)); // -> false (16 ist keine Primzahl) => RICHTIG
    console.log(isPrime(29)); // -> true (29 ist eine Primzahl) => RICHTIG
    console.log(isPrime(1)); // -> false (1 ist keine Primzahl) => RICHTIG
} 

function is_Prime(nr) {
    if (nr == 1) {
        return "false (" + nr + " ist keine Primzahl)";
    }

    let divisors = Array.from({ length: (nr - 2) }, (_, i) => 2 + i);

    console.log(divisors);
    
    for (let index = 0; index < divisors.length; index++) {
        let q = nr / divisors[index]
        if (divisors.includes(q)) {
           return "false (" + nr + " ist keine Primzahl)"; 
        } 
    }
    return "true (" + nr + " ist eine Primzahl)";
}

function initLoopsTask_B2() {
    console.log(is_Prime(7)); // -> true (7 ist eine Primzahl) => RICHTIG
    console.log(is_Prime(4)); // -> false (4 ist keine Primzahl) => RICHTIG
    console.log(is_Prime(16)); // -> false (16 ist keine Primzahl) => RICHTIG
    console.log(is_Prime(29)); // -> true (29 ist eine Primzahl) => RICHTIG
    console.log(is_Prime(1)); // -> false (1 ist keine Primzahl) => RICHTIG
} 


/// for-Schleife: break und continue'
console.log("// for-Schleife: break und continue'");


let testArray_3 = [3, 7,"error", 1, 4];

function sumArrayNoBreak(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

function sumArrayBreak(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];

        if (array[index] == "error") {
            console.error("Verdammt, da war ein Fehler!");
            break;
        }
    }
    return sum;
}

function sumArrayContinue(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        
        if (array[index] == "error") {
            console.warn("Achtung, hier ist ein Fehler!");
            continue;
        }

        sum += array[index];
    }
    return sum;
}

function initLoopsBreakContinue() {
    console.log(sumArrayNoBreak(testArray_3)); // -> 10error14
    console.log(sumArrayBreak(testArray_3)); // -> 10error (=> Verdammt, da war ein Fehler!)
    console.log(sumArrayContinue(testArray_3)); // -> 15 (=> Achtung, hier ist ein Fehler!)
}


/// while-Schleife
console.log("// while-Schleife");

function initLoopsWhile() {

    while_index = 0;
    while (while_index < 5) {
        console.log("while " + while_index);
        while_index++;
    }

    for (let for_index = 0; for_index < 5; for_index++) {
        console.log("for " + for_index);
    }
}


/// forEach-Schleife
console.log("// forEach-Schleife");

function initLoopsForEach() {

    arrayFruits.forEach(element => {
        console.log(element);
    });

    for (let i = 0; i < arrayFruits.length; i++) {
        console.log(arrayFruits[i]);
    }
}


/// Beispiel: getElementsByClassname'
console.log("// Beispiel: getElementsByClassname'");

function initFunction() {
    let refList_1 = document.getElementsByClassName('orange_box');
    
    for (let index = 0; index < refList_1.length; index++) {
        let singleRef = refList_1[index];
        singleRef.innerText = index
    }

    let refList_2 = document.getElementsByClassName('green_fill');
    
    for (let index = 0; index < refList_2.length; index++) {
        let singleRef = refList_2[index];
        singleRef.innerText += " 💞"
    }

}