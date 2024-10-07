/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const vocals = "aeiou";
let setvocals = new Set(vocals);

let counts = {};
const myMap = new Map();

// Dichiara la funzione qui.
function countVocals(){
    Array.from(word).forEach( (item,i) => {
        counts[item] = (counts[item] || 0) + 1; //count every item how many
        if (vocals.includes(item.toLowerCase())){   
            myMap.set(item,counts[item]);
        }
    }
    )
    return  myMap; 
}
// Invoca la funzione qui e stampa il risultato in console
console.log(countVocals());


//Risultato atteso se si passa 'javascript': 3 (a, a, i)