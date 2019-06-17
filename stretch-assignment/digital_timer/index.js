const wrapDiv = document.querySelector('.digits');

const sTens = document.querySelector('#secondTens');
const sOnes = document.querySelector('#secondOnes');
const msHundo = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

sTens.textContent = 0;
sOnes.textContent = 0;
msHundo.textContent = 0;
msTens.textContent = 0;


var time = 0
var myTimer = setInterval( () => timer(time++), 10);


function timer(time) {
    var mst = Math.floor(time % 10);
    msTens.textContent = mst;
    var msh = Math.floor(time % 100 / 10);
    msHundo.textContent = msh;
    var sec = Math.floor(time % 1000 / 100);
    sOnes.textContent = sec;
    var st = Math.floor(time % 10000 / 1000);
    sTens.textContent = st;
    if (time >= 1000) {
        clearInterval(myTimer);
        wrapDiv.style.color = "red";
        // sOnes.style.color = "red";
        // msHundo.style.color = "red";
        // msTens.style.color = "red";
    }
}