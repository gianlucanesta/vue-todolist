// - Stampare all'interno di una lista, un item per ogni todo.
// - Se la proprietà done è uguale a true, visualizzare il testo 
// del todo sbarrato.


Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            tasks: [
                {
                    text: 'Fare il caffè',
                    done: true,
                },
                {
                    text: 'Chiamare il dottore',
                    done: false
                },
                {
                    text: 'Andare dal barbiere',
                    done: true
                },
                {
                    text: 'Mettere in ordine la scrivania',
                    done: false
                },
                {
                    text: 'Fare la lavatrice',
                    done: true
                },
            ],
        },
        methods: {
                         
        }
    }
);