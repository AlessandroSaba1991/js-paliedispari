/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/**
 * ### Genera un numero random compresi i min e max
 * @param {number} min - Inserisci il numero più piccolo
 * @param {number} max - Inserisci il numero più grande
 * @returns {number} Numero random
 */
function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ### Definisce se un numero è pari o dispari
 * @param {number} numero -Inserisci un numero
 * @returns {string} |'pari'| o |'dispari'|
 */
function pari_dispari_string(numero) {
    if (numero % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

/**
 * ### Definisce se un numero è pari o dispari
 * @param {number} numero -Inserisci un numero
 * @returns {boolean}  True o False
 */
function pari_dispari_boolean(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


/* //Esercizio con la funzione pari_dispari_string
let somma = 0;

const scelta_utente = prompt('Scegli pari o dispari');
const numero_utente = parseInt(prompt('Inserisci un numero'));
const numero_pc = numero_random(1, 5);

somma = numero_utente + numero_pc;
console.log('la tua scelta è', scelta_utente, 'Il tuo numero ', numero_utente, 'Numero pc ', numero_pc, 'la somma è ', somma);

if (pari_dispari_string(somma) === scelta_utente) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
} */


//Esercizio con funzione pari_dispari_boolean
let somma = 0;
let risultato;

const scelta_utente = prompt('Scegli pari o dispari');
const numero_utente = parseInt(prompt('Inserisci un numero da 1 a 5'));
const numero_pc = numero_random(1, 5);

somma = numero_utente + numero_pc;

if (pari_dispari_boolean(somma)) {
    risultato = 'pari';
} else {
    risultato = 'dispari';
}

console.log('la tua scelta è', scelta_utente, 'Il tuo numero', numero_utente, 'Numero pc', numero_pc, 'la somma è', somma, 'Il risultato è', risultato);


if (risultato === scelta_utente) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}