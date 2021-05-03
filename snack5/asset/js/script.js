// Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]




$(function() {
    const arr = ['pippo', 'PLUTO', 'Paperino', ]

    //console.log(arr)

    capitalize = arr.map((arry) => {
            const capitalize = [];
            return capitalize



        })
        //console.log(arry.capitalize)





    // function capitalize(str) {
    //     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    // }
    function capitalizeFirstLetter(string, ) {
        return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    }

    console.log(capitalizeFirstLetter('pippo', )); // 









});