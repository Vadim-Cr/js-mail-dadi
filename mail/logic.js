// Compilo il mio array con tutte le email disponibili
const subscribers = ["marco@gmail.com", "veronica@hotmail.com", "erica@libero.it", "giovanni@yahoo.com"];

// definisco la costante per il bottone
const click = document.getElementById("check");
console.log(click);

// Controllo che sia nella lista di chi può accedere aganciando il click all'evento

click.addEventListener("click",
    function () {
        //  Chiedo all’utente la sua email
    const userEmail = document.getElementById("email").value;
    console.log(userEmail);
    
    if (subscribers.includes(userEmail)) {
        console.log("access granted");
    } else {
        console.log("access denied");
    }
    }
);

// Stampa un messaggio appropriato sull’esito del controllo.