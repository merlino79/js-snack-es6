// Crea un array composto da 10 oggetti che rappresentano un’automobile.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.





$(function() {

    const automobili = [

        {
            nome: 'abart',
            modello: 500,
            alimentazione: 'benzina',

        },
        {
            nome: 'lancia',
            modello: 'thema',
            alimentazione: 'gasolio',

        },
        {
            nome: 'hyunday',
            modello: 'kona',
            alimentazione: 'metano',

        },
        {
            nome: 'honda',
            modello: 'civic',
            alimentazione: 'gasolio',

        },
        {
            nome: 'ferrari',
            modello: 'portofino',
            alimentazione: 'benzina',

        },
        {
            nome: 'citroen',
            modello: 'berlingo',
            alimentazione: 'gpl',

        },
        {
            nome: 'cupra',
            modello: 'formentor',
            alimentazione: 'benzina',

        },
        {
            nome: 'bmw',
            modello: 'serie tre',
            alimentazione: 'elettrica',

        },
        {
            nome: 'audi',
            modello: 'a8',
            alimentazione: 'gasolio',

        },
        {
            nome: 'alfa romeo',
            modello: 'giulietta',
            alimentazione: 'gasolio',

        },
    ];
    //console.log(automobili);

    automobili.forEach((car) => {

        $('#parcoMacchine ul').append(print(car.nome, car.modello, car.alimentazione));


    })





    const autoBenzina = automobili.filter((car) => car.alimentazione === 'benzina');

    console.log(autoBenzina)

    const autoGasolio = automobili.filter((car) => car.alimentazione === 'gasolio');


    console.log(autoGasolio);

    const autoDifferenti = automobili.filter((car) => car.alimentazione !== 'benzina' && car.alimentazione !== 'gasolio');

    console.log(autoDifferenti);


    autoBenzina.forEach((car) => {
        //console.log(car);
        //const { nome, modello, alimentazione } = car;
        //console.log(nome, modello, alimentazione, );
        $('#autoBenzina ul').append(print(car.nome, car.modello, car.alimentazione));

    })

    autoGasolio.forEach((car) => {
        //console.log(car);
        $('#autoGasolio ul').append(print(car.nome, car.modello, car.alimentazione));
    })

    autoDifferenti.forEach((car) => {
        console.log(car)
        $('#autoRimanenti ul').append(print(car.nome, car.modello, car.alimentazione));

    })

















    function print(carnome, carmodello, caralimentazione) {
        //console.log(nome, modello, alimentazione);
        let html = `

             <li>
                ${'nome: ' +carnome}
            </li>
            <li>
                ${'modello: ' + carmodello};
            </li>
            <li>
                ${'alimentazione :' +caralimentazione}
            </li>
    

    `;
        return html

    }






});