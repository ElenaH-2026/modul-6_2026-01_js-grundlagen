//// LiveCall
console.log("/// LiveCall");

// ===== ARITHMETIC OPERATORS =====

// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion // Type Coercion
function addition() {
  console.log(5 + 3); // Numbers
  console.log("Hello" + " " + "World"); //Strings
  console.log(5 + "3");
}

function subtraction() {
  console.log(10 - 4);
  console.log("10" - 4);
}

function subtractionAssignment() {
  let score = 100;
  score -= 25;
  console.log(score);
}

function additionAssignment() {
  let counter = 5;
  let result = counter + 3;
  console.log(counter);
}

function multiplication() {
  console.log(7 * 6);
  console.log("3" * 2);
}

function decrement() {
  let lives = 3;
  lives--; // -1
  console.log(lives);
}

function increment() {
  let score = 0;
  score++; // +1
  console.log(score);
}

function division() {
  console.log(20 / 4);
  console.log("hi" / 4); // ⚡️
}

function modulo() {
  console.log(10 % 3);
  console.log(15 % 5);
}

// ===== ASSIGNMENT OPERATORS =====

function assignment() {
  let book = "Alice";
  console.log(book);
}

// ||= setzt Default nur wenn falsy (null, undefined, 0, "", false)
function logicalOrAssignment() {
  let config = { theme: null, language: "de" };
  config.theme ||= "dark";
  config.language ||= "en";
  console.log(config);
}

// ??= setzt Default nur wenn null oder undefined (nicht bei 0 oder "")
function nullishAssignment() {
  let settings = { volume: 0, brightness: null };
  settings.volume ??= 50;
  settings.brightness ??= 100;
  console.log(settings);
}

// &&= führt aus nur wenn truthy
function logicalAndAssignment() {
  let user = { name: "max", isAdmin: true };
  user.name &&= user.name.toUpperCase();
  console.log(user);
  return;
}

// ===== COMPARISON OPERATORS =====

function looseEquality() {
  console.log(0 == "0");
  console.log(false == 0);
}

function strictEquality() {
  console.log(0 === "0");
  console.log(5 === 5);
}

function looseInequality() {
  console.log(5 != "5");
}

function strictInequality() {
  console.log(5 !== "5");
}

function greaterThan() {
  console.log(10 > 10);
}

function greaterThanOrEqual() {
  console.log(10 >= 10);
}

function lessThan() {
  console.log(3 < 7);
}

function lessThanOrEqual() {
  console.log(5 <= 5);
}

// ===== LOGICAL OPERATORS =====

function logicalAnd() {
  console.log(true && true);
  console.log(true && false);
  let age = 25;
  console.log(age > 18 && age < 30);
}

function logicalOr() {
  console.log(false || true);
  console.log(false || false);
  let isWeekend = true;
  let age = 25;
  console.log(isWeekend || age < 18);
}

function logicalNot() {
  console.log(!true);
  console.log(!false);
  let isLoggedIn = false;
  console.log(!isLoggedIn);
}

// ===== SPECIAL OPERATORS =====

function ternaryOperator() {
  let temperature = 10;
  let weather = temperature > 20 ? "warm" : "cold";
  console.log(weather);

  if (temperature > 20) {
    let weather = "warm";
  } else {
    let weather = "cold";
  }
}

function nullishCoalescing() {
  let username = null;
  let displayName = username ?? "Guest";
  console.log(displayName);

  let count = 0;
  let result = count ?? 10;
  console.log(result);
}

function optionalChaining() {
  let user = { name: "Bob", address: { city: "Berlin" } };
  console.log(user?.address?.city);
  console.log(user?.phone?.number); // doesn't trow an error

  let emptyUser = null;
  console.log(emptyUser?.name);
}

// Spread: Object merging, Array cloning, Function args
function spreadOperator() {
  let defaults = { theme: "light", lang: "de" };
  let userSettings = { theme: "dark" };
  let merged = { ...defaults, ...userSettings };
  console.log(merged);

  let firstThree = [1, 2, 3];
  let arraywithduplicateNumbers = [3, 4, 5, 6];
  let mergedNumbers = [...firstThree, ...arraywithduplicateNumbers];
  console.log(mergedNumbers);
}

// ===== DESTRUCTURING =====

function arrayDestructuring() {
  let colors = ["rot", "grün", "blau"];
  let [first, second, third] = colors;
  console.log(first, second, third);
}

function objectDestructuring() {
  let person = { name: "Max", age: 30, city: "Berlin" };
  // perfect for multiple declarations
  let { name, city } = person;

  // perfect for ONE declaration
  let userName = person.name;

  console.log(name, city);
}

let person = { name: "Max", age: 30, city: "Berlin" };

// define variables from the "person" object in/as parameters
function UserCard({ name, age, city }) {
  return `<div>${name} aus ${city}</div>`;
}

// pass the "person" object as an argument 
UserCard(person);



addition();
subtraction();
subtractionAssignment();
additionAssignment();
multiplication();
division();
modulo();
decrement();
increment();
assignment();
logicalOrAssignment();
nullishAssignment();
logicalAndAssignment();
looseEquality();
strictEquality();
looseInequality();
strictInequality();
greaterThan();
greaterThanOrEqual();
lessThan();
lessThanOrEqual();
logicalAnd();
logicalOr();
logicalNot();
ternaryOperator();
nullishCoalescing();
optionalChaining();
spreadOperator();
arrayDestructuring();
objectDestructuring();
