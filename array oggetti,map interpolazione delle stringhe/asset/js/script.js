// Esercizio (array, oggetti, map, interpolazione delle stringhe)
// Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
// Es:
// [
// 	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
// 	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
// 	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
// ]
// [
// 	‘Mario Rossi può guidare’,
// 	‘Luigi Verdi non può guidare’,
// 	‘Silvia Neri può guidare’,
// ]



$(function() {
    const utenti = [{
            nome: 'alessandro',
            cognome: 'ciancio',
            eta: 41,

        },
        {
            nome: 'serena',
            cognome: 'bianchi',
            eta: 16,

        },
        {
            nome: 'francesco',
            cognome: 'chiaren',
            eta: 28,

        },
    ];
    console.log(utenti)

    const guidare = utenti.filter((age) => {
        //console.log(age)
        if (age.eta > 18) {
            return utenti.filter;


        }







    })
    console.log(guidare)










})