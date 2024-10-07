/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
var letter = prompt("Please insert the letter: ").toLowerCase();

var namesFirstLetter = [];
// Dichiara la funzione qui.
function getItemFirstLetter(names, letter){
    names.forEach( (item,i) => names[i][0].toLowerCase() === letter ? namesFirstLetter.push(names[i]): null );
    return namesFirstLetter;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(getItemFirstLetter(names,letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]