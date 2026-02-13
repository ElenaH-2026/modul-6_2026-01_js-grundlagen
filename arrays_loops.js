/// Arrays und Schleifen
console.log("/// Arrays und Schleifen");

// https://www.w3schools.com/js/js_arrays.asp

// Arrays: Basics
console.log("// Arrays: Basics");

let myList = [34, 'Elena', true];

function initArraysBasics() {
    console.log(myList);  // -> (3) [34, 'Elena', true]
    console.log(myList[1]);  // -> Elena
    myList[1] += " Hiener"
    console.log(myList[1]);  // -> Elena Hiener
    console.log(myList);  // -> (3) [34, 'Elena Hiener', true]
}

// Arrays: entries und das 'empty'
console.log("// Arrays: entries und das 'empty'");

let myCars = [];

myCars[0] = "BMW";

myCars[2] = "Audi";

function initArraysEmpty() {
    console.log(myCars);  // -> (3) ['BMW', empty, 'Audi'] // 0: "BMW" // 2: "Audi" // length: 3
}

// 'empty' wollen wir NICHT!! So also nicht machen!!


// Arrays: pop() und push()
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