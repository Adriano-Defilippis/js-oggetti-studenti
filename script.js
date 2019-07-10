// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// Oggetto Studente
var studente = {

  "nome" : "Mario",
  "cognome" : "Giordano",
  "eta" : 23

}

// Ciclo che attraversa l'Oggetto e restituisce tutte le proprietà
for (key in studente){

  document.write(key, ": ",studente[key], "<br>");
  console.log(key, ":",studente[key] );
}





// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var arrayStudenti = [
  {

    "nome" : "Luca",
    "cognome" : "Depaolo",
    "eta" : 19
  },

  {

    "nome" : "Nicola",
    "cognome" : "Orlando",
    "eta" : 23
  },

  {

    "nome" : "Antonio",
    "cognome" : "Delucia",
    "eta" : 21
  },

  {
    "nome" : "Francesco",
    "cognome" : "Onorato",
    "eta" : 27
  }
]



// Ciclo su tutti gli studenti per stampare per ognuno nome e cognome
for (var i = 0; i < arrayStudenti.length; i++){

  console.log("Nome e Cognome dello studente nell' ", [i + 1], " :", arrayStudenti[i].nome + " " + arrayStudenti[i].cognome);

};




// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


  // Nuovo oggetto vuoto inizializzato
  var oggetto = {};

  // Inserimento proprietà e descrizione nel nuovo oggetto tramite input utente
  oggetto.nome = prompt("inserisci il nome utente");
  oggetto.cognome = prompt("inserisci il Cognome utente");
  oggetto.eta = parseInt(prompt("inserisci l'età dell' utente"));

  // Nuovo Oggetto
  console.log("Nuovo oggetto creato: ", oggetto);

  // Nuovo Oggetto Pushato nel mio array di oggetti
  arrayStudenti.push(oggetto);

  // Nuovo array
  console.log("Array aggiornato ", arrayStudenti);
