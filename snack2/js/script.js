// array di 10 ogg di zucchine come snake 1 con le proprietà
//dividere in due array le zuccine che misurano  < 15 e  > 15
//stampo a video quanto peano i due gruppi di zucchine

const zucchine = [{


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

let maggiore = [];

for (zucchini of zucchine) {


    //console.log(zucchini.lunghezza);
    if (zucchini.lunghezza > 15) {
        maggiore.push(zucchini.lunghezza);

    }
    console.log(maggiore.push());
};