// array di 10 ogg di zucchine come snake 1 con le proprietà
//dividere in due array le zuccine che misurano  < 15 e  > 15
//stampo a video quanto peano i due gruppi di zucchine

let zucchine = [{


        origine: 'Nera di Milano',
        lunghezza: 20,
        peso: 3.75,

    },

    {
        origine: 'Alberello',
        lunghezza: 45,

        peso: 15.70,

    },
    {
        origine: 'Tonda di Nizza',
        lunghezza: 35,


        peso: 25,


    },
    {
        origine: 'Lunghe fiorentine',
        lunghezza: 12,


        peso: 22.08,


    },
    {
        origine: 'Trombetta di_Albenga',
        lunghezza: 7,


        peso: 12.70,


    },
    {
        origine: 'Trombetta di_Albenga',
        lunghezza: 35,


        peso: 7,


    },
    {
        origine: 'Zucchino giallo Golden',
        lunghezza: 25,


        peso: 45,


    },
    {
        origine: 'Italiane',
        lunghezza: 5,


        peso: 25.3,


    },
    {
        origine: 'Francesi',
        lunghezza: 23,


        peso: 30.4,


    },
    {
        origine: 'Ungheresi',
        lunghezza: 2,


        peso: 45,


    },





];

let maggiore = [];
let minore = [];
let pesoTotaleCorte = 0;
let pesoTotaleLunghe = 0;

for (zucchini of zucchine) {


    //console.log(zucchini.lunghezza);
    if (zucchini.lunghezza < 15) {
        minore.push(zucchini.lunghezza);
        pesoTotaleCorte += zucchini.peso;












    } else {
        maggiore.push(zucchini.lunghezza);
        pesoTotaleLunghe += zucchini.peso;




    }




};


console.log("gruppo di zucchine > 15 cm  " + maggiore);
console.log("gruppo di zucchine < 15 cm  " + minore);
console.log('<------>');
console.log('peso tot zucchine corte : ' + pesoTotaleCorte);
console.log('peso tot zucchine lunghe : ' + pesoTotaleLunghe);