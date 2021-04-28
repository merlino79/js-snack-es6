//array di 10 ogg rappr zucchine varietà e peso e lunghezza
//calcolo peso di tutte le zucchine

let zucchine = [{


        origine: 'Nera di Milano',
        lunghezza: '20 cm',
        peso: 3.75,

    },

    {
        origine: 'Alberello',
        lunghezza: '45 cm',

        peso: 15.70,

    },
    {
        origine: 'Tonda di Nizza',
        lunghezza: "35 cm",


        peso: 25,


    },
    {
        origine: 'Lunghe fiorentine',
        lunghezza: '33 cm',


        peso: 22.08,


    },
    {
        origine: 'Trombetta di_Albenga',
        lunghezza: "5 cm",


        peso: 12.70,


    },
    {
        origine: 'Trombetta di_Albenga',
        lunghezza: "15 cm",


        peso: 7,


    },
    {
        origine: 'Zucchino giallo Golden',
        lunghezza: "15,7 cm",


        peso: 45,


    },
    {
        origine: 'Italiane',
        lunghezza: "22 cm",


        peso: 25.3,


    },
    {
        origine: 'Francesi',
        lunghezza: "28 cm",


        peso: 30.4,


    },
    {
        origine: 'Ungheresi',
        lunghezza: '45 cm',


        peso: 45,


    },





];


console.log(zucchine);
let pesoTotale = 0;
for (zucchini of zucchine) {
    pesoTotale += zucchini.peso
    console.log('il peso totale delle zucchine è : ' + pesoTotale.toFixed(2));
};