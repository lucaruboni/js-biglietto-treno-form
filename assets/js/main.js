/* 
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

/* chiedere il nome e cognome dell'utente */

const customerName = document.getElementById("name");
console.log(customerName)

/* chiedere quanti km vuole percorrere l'utente */

const kilometers = document.getElementById("kilometers");
console.log(kilometers);

/* anni del passeggero */

const customerAge = document.getElementById("age_group");
console.log(customerAge);


const generaBiglietto = document.getElementById("genera");

const annullaBiglietto = document.getElementById("annulla");

let cancellaForm = document.getElementById("cancella_tutto");

let inputNameEl;

let inputKmEl;

let inputAgeEl;

const outPutName = document.querySelector('h2')
console.log(outPutName);

const outputTicket = document.querySelector('#tipo_biglietto');

const outputCarrozza = document.querySelector('#carrozza');

let numCarrozza;

let carrozzaRounded;

const outputCodice = document.querySelector('#codice_cp');

let numCodice;

let codiceRounded;

const outputPrezzo = document.querySelector('#costo_biglietto');


/* EVENTLISTENER ON CLICK */

generaBiglietto.addEventListener('click', function() {
    console.log("click")
    

/*  input value */

    inputNameEl = document.getElementById("input_name").value;
    console.log(inputNameEl);

    inputKmEl = document.getElementById("input_km").value;
    console.log(inputKmEl);

    inputAgeEl = document.getElementById("inputState").value;
    console.log(inputAgeEl);


    /* prezzo del biglietto */

    let ticketPrice = (Number(inputKmEl * 0.21));
    console.log(ticketPrice);


/* sconti */


    if (inputAgeEl === "minorenne"){
        ticketPrice = Number(ticketPrice - (ticketPrice * 20 / 100));
        console.log(ticketPrice);
        console.log("20%");

        outputTicket.innerHTML = "Biglietto Minori"
    }

    else if (inputAgeEl === "anziano"){
        ticketPrice = Number(ticketPrice - (ticketPrice * 40 / 100));
        console.log(ticketPrice);
        console.log("40%");

        outputTicket.innerHTML = "Biglietto over 65"
    }

    else if (inputAgeEl === "maggiorenne"){
        outputTicket.innerHTML = "Biglietto standard";
    }

    outPutName.innerHTML = inputNameEl; 

    numCarrozza = Math.random() * 10 / 2 ;

    carrozzaRounded = numCarrozza.toFixed();

    outputCarrozza.innerHTML = carrozzaRounded;


    numCodice = (Math.random() * 100000);

    codiceRounded = numCodice.toFixed();

    outputCodice.innerHTML = codiceRounded;

    /* price output */

    const ticketPriceRounded = ticketPrice.toFixed(2)
    console.log(ticketPriceRounded) 

    const finalPrice = document.getElementById("final_price");
    console.log(finalPrice);



    finalPrice.innerHTML = ticketPriceRounded + "€"; 


})


/* EVENTLISTENER ANNULLA */

annullaBiglietto.addEventListener("click", function(){
    console.log("click")    

   
    

})

 
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 


