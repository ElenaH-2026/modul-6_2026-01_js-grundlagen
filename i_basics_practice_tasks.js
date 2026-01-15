//// Sektion I: Basics => Übungen
console.log("/// Sektion I: Basics => Übungen");


/// 01 Aufgabe
console.log("// 01 Aufgabe");

// Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).
// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

function fullName(firstName, lastName) {
    let name = (firstName + " " + lastName);
    return name;
}
console.log(fullName('Max','Mustermann'));

// -> Max Mustermann => 01 Aufgabe -> RICHTIG


/// 02 Aufgabe
console.log("// 02 Aufgabe");

// Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.
// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

function capitalizeLetters(textUpper) {
    return textUpper.toUpperCase();
}
console.log(capitalizeLetters('bAnanE'));

// -> BANANE => 02 Aufgabe -> RICHTIG


/// 03 Aufgabe
console.log("// 03 Aufgabe");

// Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.
// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

function countCharacters(textCount) {
    return textCount.toString().length;
}
console.log(countCharacters('banana'));

// -> 6 => 03 Aufgabe -> RICHTIG


/// Knacker-Aufgabe
console.log("// Knacker-Aufgabe");

// Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.
// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

function formatToCurrency(price) {
    return (price.toFixed(2).toString().replace(".", ",") + "€")
}
console.log(formatToCurrency(0.5));

// -> 0,50€ => Knacker-Aufgabe -> RICHTIG