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
    
        // per ogni giro del loop mettiamo a confronto userEmail con un elemento dell'array 
        for (let i = 0; i < subscribers.length; i++) {
        if ( userEmail === subscribers[i]) {
        console.log("access granted");
        } else {}
        }
    }
);

// Stampa un messaggio appropriato sull’esito del controllo.