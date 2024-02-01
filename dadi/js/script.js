// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Dichiarazione delle costanti
const buttonPc = document.getElementById("pc-btn");
const buttonUser = document.getElementById("user-btn");
const outputPc = document.querySelector(".out-pc");
const outputUser = document.querySelector(".out-user");
const output = document.getElementById("out");

// Dichiarazione delle variabili per i punteggi del computer e del giocatore
let pcNum = 0;
let userNum = 0;

// Funzione per confrontare i punteggi e determinare il vincitore
function confrontaPunteggi() {
    
    if (pcNum > userNum) {
        output.innerHTML = "Ha vinto il PC!!!";
    } else if (pcNum === userNum) {
        output.innerHTML = "Incredibile PAREGGIO!!!, Tira di nuovo";
    } else {
        output.innerHTML = "Ha vinto il GIOCATORE!!!";
    }
}

// Gestore dell'evento per il click sul pulsante del computer
buttonPc.addEventListener('click', function() {
    
    pcNum = Math.floor(Math.random() * 6 + 1);  // Generazione di un numero casuale da 1 a 6 per il computer
    outputPc.innerHTML = pcNum + ' ';  // Visualizzazione del numero generato per il computer
    confrontaPunteggi();  // Confronto dei punteggi e determinazione del vincitore
});

// Gestore dell'evento per il click sul pulsante del giocatore
buttonUser.addEventListener('click', function() {
    
    userNum = Math.floor(Math.random() * 6 + 1);  // Generazione di un numero casuale da 1 a 6 per il giocatore
    outputUser.innerHTML = userNum + ' ';  // Visualizzazione del numero generato per il giocatore
    confrontaPunteggi();  // Confronto dei punteggi e determinazione del vincitore
});