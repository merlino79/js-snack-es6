// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
// [
// 	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
// 	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
// 	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },



$(function() {
    const animals = [{
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'tigre',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'gallina',
            famiglia: 'fasianidi',
            classe: 'uccello'
        },


    ];

    console.log(animals)

    animals.forEach((animali) => {

        $('#animali ul').append(print(animali.nome, animali.famiglia, animali.classe))

    })

    const animaliFiltrati = animals.filter((animali) => animali.classe === 'mammiferi');
    console.log(animaliFiltrati)

    animaliFiltrati.forEach((animali) => {
        $('#mammiferi ul').append(print(animali.nome, animali.famiglia, animali.classe))

    })










    function print(nomeAnimale, nomeFamiglia, nomeClasse, ) {
        //console.log(nome);
        let html =
            `
            <li>
                ${'nome: ' + nomeAnimale }
            </li>
            <li>
            ${'famiglia: ' + nomeFamiglia }
            
            

            </li>
            <li>
            ${'classe: ' + nomeClasse }

            </li>
        
        `;
        return html

    }



})