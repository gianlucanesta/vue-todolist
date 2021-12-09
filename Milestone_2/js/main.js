// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.


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
            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            }, 
        }
    }
);