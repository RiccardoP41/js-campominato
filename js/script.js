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



var difficolta;
while (difficolta != 0 && difficolta != 1 && difficolta != 2) {
    difficolta = parseInt(prompt("scegli la difficoltà del gioco: 0 per facile, 1 per normale, 2 per difficile"));
    if (difficolta != 0 && difficolta != 1 && difficolta != 2) {
        alert("scrivi 0, 1 o 2 per scegliere la difficoltà");
    }
}

switch (difficolta) {
    case 0:
        var massimo = 100;
        break;
    case 1:
        var massimo = 80;
        break;
    case 2:
        var massimo = 50;
        break;
}

var numeriAI = [];
var possibilita = massimo - numeriAI.length
var bombe;
while (numeriAI.length < 16) {
        bombe  = numeroRandom(1,100);
        if (trovaElemento(numeriAI,bombe) == false) { //  si può scrivere (!trovaElemento(numeriAI,bombe))
                    numeriAI.push(bombe);
        }
}

var numeriUtente = [];
var nu;
while (numeriUtente.length < possibilita && trovaElemento(numeriAI,nu) == false) {
    nu = parseInt(prompt("inserisci un numero da 1 a " + massimo));
        if (trovaElemento(numeriUtente,nu) == true || isNaN(nu) || nu < 1 || nu > massimo) {
           // nu = parseInt(prompt("inserisci un altro numero da 1 a 100"));    //questo input non funziona
           alert("Deve essere un altro numero tra 1 e " + massimo);
       } else if (trovaElemento(numeriAI,nu) == true) {
           alert("Boom! Sei esploso con punteggio " + numeriUtente.length);
       } else {
               numeriUtente.push(nu);
       }
}
if (numeriUtente.length == possibilita) {
    alert("Complimenti! Sei sopravvissuto!");
}




// **********PRIMA VERSIONE SENZA BONUS**********************

// ******Creare un array di 16 numeri casuali non duplicati.

// var numeriAI = [];
// var bombe;
// for (var i = 0; numeriAI.length < 16; i++) {
//     bombe  = numeroRandom(1,100);
//     if (trovaElemento(numeriAI,bombe) == false) {
//         numeriAI.push(bombe);
//     }
// }
// console.log("array bombe " + numeriAI);

// *****creare l'array per i numeri inseriti dall'utente evitando duplicati

// var numeriUtente = [];
// var nu;
//
// while (numeriUtente.length < 84 && trovaElemento(numeriAI,nu) == false) {
//     nu = parseInt(prompt("inserisci un numero da 1 a 100"));
//         if (trovaElemento(numeriUtente,nu) == true || isNaN(nu) || nu < 1 || nu > 100) {
//            // nu = parseInt(prompt("inserisci un altro numero da 1 a 100"));    //questo input non funziona
//            alert("Deve essere un altro numero tra 1 e 100!");
//        } else if (trovaElemento(numeriAI,nu) == true) {
//            alert("Boom! Sei esploso dopo " + numeriUtente.length + " buoni tentativi!");
//        } else {
//                numeriUtente.push(nu);
//        }
// }

// ************PROVA CON DO WHILE
// do {
//     nu = parseInt(prompt("inserisci un numero da 1 a 100"));
//             if (trovaElemento(numeriUtente,nu) == true || isNaN(nu) || nu < 1 || nu > 100) {
//                // nu = parseInt(prompt("inserisci un altro numero da 1 a 100"));    //questo input non funziona
//                alert("Deve essere un altro numero tra 1 e 100!");
//            } else if (trovaElemento(numeriAI,nu) == true) {
//                alert("Boom! Sei esploso dopo " + numeriUtente.length + " buoni tentativi!");
//            } else {
//                    numeriUtente.push(nu);
//            }
// } while (numeriUtente.length < 5 && trovaElemento(numeriAI,nu) == false);
// ************************

// if (numeriUtente.length == 84) {
//     alert("Complimenti! Sei sopravvissuto!");
// }

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
