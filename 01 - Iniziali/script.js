/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

var namesLetter = [];
// Dichiara la funzione qui.
function getFirstLetterItem(){
    names.forEach( (item,i) => namesLetter.push(names[i][0]) );
    return namesLetter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getFirstLetterItem());

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]