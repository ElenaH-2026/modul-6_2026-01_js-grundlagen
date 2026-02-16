//// Sektion IV: Arrays und Schleifen => Übungen
console.log("/// Sektion I: Arrays und Schleifen => Übungen");

/// Aufgabenstellung 1: includes
console.log("// Aufgabenstellung 1: includes");

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
    console.log(containsElement(names, 'Ben')); // -> true => RICHTIG, allerdings erst bei der elsw-Bedingung!!
    console.log(containsElement(names, 'ben')); // -> false => RICHTIG, weil flasch (klein) geschrieben.
    console.log(containsElement(names, 'Daniel')); // -> false => RICHTIG
}