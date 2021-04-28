let studente = [{
        nome: 'alessandro',
        cognome: 'ciancio',
        age: 41,
    },
    {
        nome: 'marco',
        cognome: 'bevolacqua',
        age: 35,
    },

];

for (datiStudenti of studente) {
    const studenti = datiStudenti;

    console.log(studenti.nome + " " + studenti.cognome);
}