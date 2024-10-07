/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const thename = 'Mario';
function getNow(){return new Date;}

// Dichiara la funzione qui.
const greetings = (thename) => {return getNow().getHours()>17?  `good evening ${thename}` :  ( getNow().getHours()>13?  `good afternoon ${thename}` : `good morning ${thename}`) ;}
console.log(greetings(thename));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.