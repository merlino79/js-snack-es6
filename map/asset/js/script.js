// Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]




$(function() {






    const str = "pippo PLUTO paperino"

    console.log(

        str.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ')

    )









});