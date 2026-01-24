/// DOM Manipulation
console.log("/// DOM Manipulation");

// w3schools: https://www.w3schools.com/js/js_htmldom.asp
// selfhtml: https://wiki.selfhtml.org/wiki/JavaScript/DOM
// Das DOM (Document Object Model) ist die Schnittstelle zwischen HTML und dynamischem JavaScript. Alle Elemente werden zu Objekten, die dynamisch aufgerufen, verändert, hinzugefügt und gelöscht werden können.

let titel = document.getElementById("website_titel");

console.log(titel);   // -> neuer Titel
console.log(titel.innerHTML);   // -> Der Titel der Website

titel.innerHTML = "neuer Titel";

// .innerHTML vs. .innerText
document.getElementById("test_div_1").innerHTML = "<p>test<p>";   // -> test
document.getElementById("test_div_2").innerText = "<p>test<p><script></script>";   // -> <p>test<p><script></script>
document.getElementById("test_div_3").innerHTML = "<p>test<p><script></script>";   // -> test

// .classList (.add (Hinzugügen) / .remove (Entfernen) / .toggle (An-/Ausschalten abhängig von der Ausgangssituation))
document.getElementById("test_div_1").classList.add("green_bg");
document.getElementById("test_div_2").classList.remove("green_bg");
document.getElementById("test_div_3").classList.toggle("green_bg");

// Attribute setzten (verändern)
document.getElementById("test_input_nr_1").setAttribute('type', 'text');
document.getElementById("test_input_nr_1").setAttribute('value', 'text');
document.getElementById("test_input_nr_2").value = 123;

// Auslesen von Daten aus Input-Feldern
console.log(document.getElementById("test_input_nr_0").value);   // -> 5
console.log(document.getElementById("test_input_nr_1").value);   // -> text
console.log(document.getElementById("test_input_nr_2").value);   // -> 123

// Vorbereitung für Modul 6 - Sektion II - Video 07 oncklick
// Baue eine Funktion, die die Klasse "d_none" mit classList.toggle() hinzufügt/entfernt bei einem beliebigen HTML Element.
// Hinweis: Beliebig heißt hier, dass die id aus dem Parameter derFunktion genommen wird.
function toggleDNone(id) {
    document.getElementById(id).classList.toggle("d_none");
}

function logger(params) {
    console.log("ja");
    
}


// Events (z.B. oncklick, onchange, onload, onkeyup, onkeydown, onfocus)
// https://www.w3schools.com/jsref/dom_obj_event.asp
// Weitere Events PC: mousedown, mouseleave, mouseover, ...
// Events Mobilgeräte: touchstart, touchend, ...
