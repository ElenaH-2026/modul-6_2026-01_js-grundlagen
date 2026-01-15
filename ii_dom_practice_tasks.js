///// Sektion II: DOM-Manipulation => Aufgaben
console.log("//// Sektion II: DOM-Manipulation => Aufgaben");

//// Aufgaben: Button hinzufügen
console.log("//// Aufgaben: Button hinzufügen");

/// Aufgabe 1
console.log("/// Aufgabe 1");

// Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.
// Tipp: Im besten Fall bekommt der Button hier schon eine id.

document.getElementById("aufgabe_button_div").style.width = "200px";
document.getElementById("aufgabe_button_div").style.height = "40px";
document.getElementById("aufgabe_button_div").style.cursor = "pointer";
document.getElementById("aufgabe_button_div").style.backgroundColor = "green";
document.getElementById("aufgabe_button_div").style.border = "8px orange solid";
document.getElementById("aufgabe_button_div").style.borderRadius = "40px";
document.getElementById("aufgabe_button_div").style.padding = "24px";


/// Aufgabe 2
console.log("/// Aufgabe 2");

// Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "Klick mich"

document.getElementById("aufgabe_button_div").innerHTML = "Klick mich";
document.getElementById("aufgabe_button_div").style.display = "flex";
document.getElementById("aufgabe_button_div").style.fontSize = "24px";
document.getElementById("aufgabe_button_div").style.justifyContent = "center";
document.getElementById("aufgabe_button_div").style.alignItems = "center";
