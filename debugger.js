let count = 0;

function init_1(){
    console.log(1);
    console.log(2);
    console.log(3);
}

function init_2() {
    debuggerOutput('A');
    debuggerOutput('A');
    testOne();
    debuggerOutput('A');
    debuggerOutput('A');
}

function testOne(){
    debuggerOutput('B');
    debuggerOutput('B');
    testTwo();
    debuggerOutput('B');
    debuggerOutput('B');
}

function testTwo(){
    debuggerOutput('C');
    debuggerOutput('C');
    debuggerOutput('C');
}

function debuggerOutput(text){
    count--;
    let debuggerLogRef = document.getElementById('debugger_log_2');
    debuggerLogRef.innerHTML += " => " + text + count;
}

function init_3() {
    testThree();
    debuggerOutput_3('init_3');
    testThree();
    testFour(); // Achtung hier ist ein Fehler, wel kein Parameter übergeben wurde!
    testThree();
}

function testThree() {
    debuggerOutput_3('testThree');
}

function testFour(text) {
    debuggerOutput_3(text);
    testThree();
}

function debuggerOutput_3(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log_3');
    debuggerLogRef.innerHTML = " => " + count + text;
}