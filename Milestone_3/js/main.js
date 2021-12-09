// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            newTaskText: '',
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
            addNewTask: function() {
                const trimmednewTaskText = this.newTaskText.trim();
                if(trimmednewTaskText.length > 2){
                    this.tasks.push({
                        text: trimmednewTaskText,
                        done: false
                    });
                    this.newTaskText = '';  
                }
            },
            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            }, 
        }
    }
);