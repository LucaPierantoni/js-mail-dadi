// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

/* genero un numero random al computer */
const pcNum = Math.floor(Math.random()*6+1);
console.log(`Il numero random del pc: ${pcNum}`);
/* genero un numero random al giocatore */
const userNum = Math.floor(Math.random()*6+1);
console.log(`Il numero random del giocatore: ${userNum}`);

/* se il numero del computer e maggiore di quello del giocatore */
if (pcNum > userNum){
    /* stampa: ha vinto il PC */
    console.log("Ha vinto il PC!!!");
} else if (pcNum === userNum){
    console.log("Incredibile PAREGGIO!!!, Tira dinuovo");
} else {
    /* altrimenti */
    /* stampa: ha vinto il GIOCATORE */
    console.log("Ha vinto il GIOCATORE!!!");
}