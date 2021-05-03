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

    // let guidare = utenti.map(utente => {
    //     let text = " ";
    //     const { nome, cognome } = utente;
    //     if (utente.age > 17) {
    //         text = `${nome} ${cognome} puoi guidare `
    //     } else {
    //         text = `${nome} ${cognome} non puoi guidare`
    //     }
    //     return text;












    // })
    // console.log(guidare);

    let guida = utenti.map((utente) => {
        if (utente.eta > 18) {
            return utente.nome + " puoi giudare"
        } else {
            return utente.nome + " non puoi guidare"
        }

    })
    console.log(guida);















})