// Aggiungi Filtro per ricerca task


Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            newTaskText: '',
            userFilterText:'',
            tasks: [
                {
                    text: 'Fare il caffè',
                    done: false,
                    visible: true
                },
                {
                    text: 'Chiamare il dottore',
                    done: false,
                    visible: true
                },
                {
                    text: 'Andare dal barbiere',
                    done: false,
                    visible: true
                },
                {
                    text: 'Mettere in ordine la scrivania',
                    done: false,
                    visible: true
                },
                {
                    text: 'Fare la lavatrice',
                    done: false,
                    visible: true
                },
            ],
        },
        methods: {
            addNewTask: function() {
                const trimmednewTaskText = this.newTaskText.trim();
                if(trimmednewTaskText.length > 2){
                    this.tasks.push({
                        text: trimmednewTaskText,
                        done: false,
                    });
                    this.newTaskText = '';  
                }
            },
            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            }, 
            toggleDone: function(index){
                this.tasks[index].done = !this.tasks[index].done;
            },
            textFilter: function() {
                this.tasks.forEach((element) => {
                    if(element.text.toLowerCase().includes(this.userFilterText.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            }
        }
    }
);