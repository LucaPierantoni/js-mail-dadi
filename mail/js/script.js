// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())

const accessOut = document.getElementById("access");
const inputMail = document.getElementById("user-email");
const verifyBtn = document.getElementById("verify");


const lock = document.querySelector(".locked");
const unlock = document.querySelector(".unlocked");



verifyBtn.addEventListener("click",
    function(){
        event.preventDefault(); // Impedisce il comportamento predefinito del modulo di invio
        /* creo un'array con 5 email */
        const mailList = ["luca@gmail.com", "mauro@gmail.com", "paola@gmail.com", "roberto@gmail.com", "gianni@gmail.com"];

        const userMail = inputMail.value;

        let accessoConsentito = false; 

        const lock = document.querySelector(".locked");
        const unlock = document.querySelector(".unlocked");


        for (i=0; i<mailList.length; i++){
            /* se l'email dell'utente e uguale a una delle mail inserite nell'array */
            if (userMail === mailList[i]){
                accessoConsentito = true;
            }
        }
        if (accessoConsentito === true) {
            accessOut.innerHTML = 'Accesso Consentito';
            accessOut.classList.add("green");
            lock.classList.add("none");
            unlock.classList.remove("none");
        } else {
            accessOut.innerHTML = 'Accesso Negato';
            accessOut.classList.add("red");
            accessOut.classList.remove("green");
            unlock.classList.add("none");
            lock.classList.remove("none");
        }
        console.log(inputMail.value);
    }
)