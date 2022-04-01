/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


/**
 * ### Capire se una parola è un palindromo
 * Inverte la parola inserita e la confronta con la stessa
 * @param {string} parola - la parola da elaborare
 * @returns {boolean} true o false
 */
function palindromo(parola) {

    //Inizializzio una variabile stringa per inserire la parola al contrario
    let parola_contraria = "";
    //trovo la lunghezza della parola e sottraggo 1 per avere le posizioni
    const lunghezza_parola = (parola.length) - 1;

    //ciclo i caratteri della parola per creare la parola al contrario
    for (let i = lunghezza_parola; i >= 0; i--) {
        parola_contraria += parola[i];
    }

    //condizione per capire se è palindroma
    if (parola === parola_contraria) {
        return true
    } else {
        return false
    }
}

const parola_utente = prompt("Inserisci un parola");

if (palindromo(parola_utente)) {
    console.log("è un palindromo");
} else {
    console.log("non è un palindromo");
}