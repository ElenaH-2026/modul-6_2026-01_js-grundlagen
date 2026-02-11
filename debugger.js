let count = 0;

// Breakpoints setzen

function init_1() {
    console.log(1);
    console.log(2);
    console.log(3);
}

// Debugger-Pfeile

function init_2() {
    debuggerOutput('A');
    debuggerOutput('A');
    testOne();
    debuggerOutput('A');
    debuggerOutput('A');
}

function testOne() {
    debuggerOutput('B');
    debuggerOutput('B');
    testTwo();
    debuggerOutput('B');
    debuggerOutput('B');
}

function testTwo() {
    debuggerOutput('C');
    debuggerOutput('C');
    debuggerOutput('C');
}

function debuggerOutput(text) {
    count--;
    let debuggerLogRef = document.getElementById('debugger_log_2');
    debuggerLogRef.innerHTML += " => " + text + count;
}

// Variablen anzeigen

function init_3() {
    testThree();
    debuggerOutput_3('init_3');
    testThree();
    testFour('testFour'); // Achtung! Fehler, wenn an dieses Stelle kein Parameter übergeben wird!
    testThree();
}

function testThree() {
    debuggerOutput_3('testThree');
}

function testFour(text) {
    debuggerOutput_3(text);
    testThree();
}

function debuggerOutput_3(text) {
    count++;
    let debuggerLogRef = document.getElementById('debugger_log_3');
    debuggerLogRef.innerHTML = " => " + count + text;
}

// Scopes im Debugger sehen

function init_4() {
    debuggerOutput_4('init_4');
    testFive();
    testSix('testSix');
}

function testFive() {
    debuggerOutput_4('testFive');
}

function testSix(text) {
    debuggerOutput_4(text);
}

function debuggerOutput_4(text) {
    count++;
    let debuggerLogRef = document.getElementById('debugger_log_4');
    debuggerLogRef.innerHTML = count + " => " + text;
}

// wichtige Tabs des Debuggers

function init_5() {
    debuggerOutput_5('init_5');
    testEight('testEight');
}

function testSeven() {
    debuggerOutput_5('testSeven');
}

function testEight(text) {
    debuggerOutput_5(text);
}

function debuggerOutput_5(text) {
    count++;
    let debuggerLogRef = document.getElementById('debugger_log_5');
    debuggerLogRef.innerHTML = count + " => " + text;
}

// Offizielle Debugger-Doku:
// https://developer.chrome.com/docs/devtools/javascript?hl=de