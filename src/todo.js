export default class ToDo {
    #title;
    #description;
    #dueDate;
    #priority;
    
    constructor(title, description, dueDate, priority){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
        this.#priority = priority;
    }

    changePriority(newPriority){
        if(newPriority != 'urgent' && newPriority != 'moderate'
            && newPriority != 'unrushed') console.log('Error');
        else this.#priority = newPriority;
    }

    getTitle(){
        return this.#title;
    }

    getDescription(){
        return this.#description;
    }
    
    getDate(){
        return this.#dueDate;
    }
    
    getPriority(){
        return this.#priority;
    }
}