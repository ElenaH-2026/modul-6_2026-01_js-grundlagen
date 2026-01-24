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


//// Aufgaben: setAttribute
console.log("//// Aufgaben: setAttribute");

/// 1. Aufgabe
console.log("/// 1. Aufgabe");

// Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.
console.log(document.getElementById("aufgabe_setAttribute_p_1"));


/// 2. Aufgabe
console.log("/// 2. Aufgabe");

// Füge mit JavaScript dem p-tag einen title hinzu.
// Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen, 
// mehr dazu z.B. hier: https://www.w3schools.com/tags/att_global_title.asp
document.getElementById("aufgabe_setAttribute_p_1").title = "Übungstext";


/// 3. Probiere aus
console.log("/// 3. Probiere aus");

// Kannst du auch eine css class mit setAttribute hinzufügen?
document.getElementById("aufgabe_setAttribute_p_1").setAttribute("class", "green_bg");
// -> Bei .setAttribute wird die bestehende css class überschrieben/ersetzt!

/// 4. Probiere aus
console.log("/// 4. Probiere aus");

// Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?
// Hinweis: Füge hierzu vorher schon einmal eine andere class ein!

document.getElementById("aufgabe_setAttribute_p_2").classList.add("green_bg");
// -> Bei .classList.add wird eine weitere css class hinzugefügt.


//// Aufgaben: onkeyup/onkeydown

/// 1. Aufgabe
console.log("/// 1. Aufgabe");

// Erstelle ein inputfeld mit einer selbstgewählten id


/// 2. Aufgabe
console.log("/// 2. Aufgabe");

// Erstelle eine Funktion, die den Value dieses inputfeldes aus loggt.
function myOnklickFunction(id) {
    console.log(document.getElementById(id).value);
}


/// 3. Probiere aus
console.log("/// 3. Probiere aus");

// Vergleiche nun den log von onkeyup und onkeydown. Siehst du einen Unterschied?
// bei okeyup wird der ganze Eintrag in einer Zeile ausgeloggt
// bei onkeydown entsteht wird eine Pyramide ausgelogt. Jede Zeile enthält den Eintrag der vorherigen ergänzt um den akltuellen.
