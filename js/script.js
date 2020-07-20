// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// ******Creare un array di 16 numeri casuali non duplicati.
var numeriAI = [];
var bombe;
for (var i = 0; numeriAI.length < 16; i++) {
    bombe  = numeroRandom(1,100);
    if (trovaElemento(numeriAI,bombe) == false) {
        numeriAI.push(bombe);
    }
}
console.log("array bombe " + numeriAI);

// *****creare l'array per i numeri inseriti dall'utente evitando duplicati

var numeriUtente = [];
var nu;
for (var i = 0; numeriUtente.length < 5; i++) {
    nu = parseInt(prompt("inserisci un numero da 1 a 100"));
     if (trovaElemento(numeriUtente,nu) == true || isNaN(nu) || nu < 1 || nu > 100) {
        nu = parseInt(prompt("inserisci un numero da 1 a 100"));
    } else if (trovaElemento(numeriAI,nu) == true) {
        alert("Boom")
    } else {
            numeriUtente.push(nu);
    }
}
console.log("numeri utente " + numeriUtente);




// FUNZIONI
function numeroRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}



function trovaElemento(array,elemento){
    var i = 0;
    while (i < array.length) {
        if (elemento == array[i]) {
            return true;
        }
        i++;
    }
    return false;
}
