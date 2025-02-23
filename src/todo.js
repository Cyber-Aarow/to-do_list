export default class ToDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changePriority(newPriority){
        if(newPriority != 'urgent' && newPriority != 'moderate'
            && newPriority != 'unrushed') console.log('Error');
        else this.priority = newPriority;
    }

    getPriority(){
        return this.priority;
    }

    getDate(){
        return this.dueDate;
    }
}