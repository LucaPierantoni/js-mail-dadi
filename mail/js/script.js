// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())

const accessOut = document.getElementById("access");


/* creo un'array con 5 email */
const mailList = ["luca@gmail.com", "mauro@gmail.com", "paola@gmail.com", "roberto@gmail.com", "gianni@gmail.com"];

/* chiedo all'utente la sua mail */
const userMail = prompt("Inserisci la tua email per il controllo");

let accessoConsentito = false;

/* creo un ciclo di controllo */

for (i=0; i<mailList.length; i++){

    /* se l'email dell'utente e uguale a una delle mail inserite nell'array */
    if (userMail === mailList[i]){
        accessoConsentito = true;
    }
}

if (accessoConsentito === true) {
    accessOut.innerHTML = 'Accesso Consentito';
} else {
    accessOut.innerHTML = 'Accesso Negato';
}