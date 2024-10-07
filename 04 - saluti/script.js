/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const thename = 'Mario';

// Dichiara la funzione qui.

const greetings = (thename) => `Ciao ${thename}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(thename));


//Risultato atteso se si passa 'Mario': // ciao Mario