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

    animals.forEach((index) => {

        $('#animali ul').append(print(index.nome, index.famiglia, index.classe))

    })











    function print(nomeAnimale, nomeFamiglia, nomeClasse, ) {
        //console.log(nome);
        let html =
            `
            <li>
                ${'nome: ' + nomeAnimale }
            </li>
            <li>
            ${'nome: ' + nomeFamiglia }
            
            

            </li>
            <li>
            ${'nome: ' + nomeClasse }

            </li>
        
        `;
        return html

    }



})