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


    //  let mammiferi = animals.filter(function(mammifero) {
    //         return mammifero.classe === 'mammiferi'

    //     })
    //     console.log(mammiferi)

    const animaliFiltrati = animals.filter((animali) => {


        if (animali.includes('mammiferi')) {
            return true;
        }

    })
    console.log(animaliFiltrati)





















});