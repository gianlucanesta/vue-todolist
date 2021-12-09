// cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


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
            toggleDone: function(index){
                this.tasks[index].done = !this.tasks[index].done;
            }
        }
    }
);