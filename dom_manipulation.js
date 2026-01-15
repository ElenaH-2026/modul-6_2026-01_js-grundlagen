/// DOM Manipulation
console.log("/// DOM Manipulation");

// w3schools: https://www.w3schools.com/js/js_htmldom.asp
// selfhtml: https://wiki.selfhtml.org/wiki/JavaScript/DOM
// Das DOM (Document Object Model) ist die Schnittstelle zwischen HTML und dynamischem JavaScript. Alle Elemente werden zu Objekten, die dynamisch aufgerufen, verändert, hinzugefügt und gelöscht werden können.

let titel = document.getElementById("website_titel");

console.log(titel);   // -> neuer Titel
console.log(titel.innerHTML);   // -> Der Titel der Website

titel.innerHTML = "neuer Titel";

document.getElementById("test_div_1").innerHTML = "<p>test<p>";
document.getElementById("test_div_2").innerText = "<p>test<p><script></script>";
document.getElementById("test_div_3").innerHTML = "<p>test<p><script></script>";