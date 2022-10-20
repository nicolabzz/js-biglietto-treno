/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/


const age = parseInt(prompt("Inserire eta:"));
const km = parseFloat(prompt("Inserire i km da percorrere:"));

let price = 0.21 * km;
let finalPrice;


if (age < 18)
{
    finalPrice = price * 0.8;
}
else if (age > 65)
{
    finalPrice= price * 0.6;
}
else
{
    finalPrice = price;
}

document.getElementById("biglietto").innerHTML = "Prezzo biglietto: " + finalPrice.toFixed(2) + "$";