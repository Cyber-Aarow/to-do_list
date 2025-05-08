import ToDo from './todo.js';
import Project from './project.js';
import DOM from './dom.js';
import './main.css';

let project1 = Project();

project1.addToDo(new ToDo('Dinner', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project1.addToDo(new ToDo('Bible Study', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project1.addToDo(new ToDo('Text Darren', 'Try to network with a web dev. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));

let project2 = Project();

project2.addToDo(new ToDo('MONKEY', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project2.addToDo(new ToDo('THROW', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project2.addToDo(new ToDo('WAAAAAAAAAAR', 'Try to network with a web dev. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));



DOM(project1).showList();
DOM(project1).setOrderButton();
DOM(project1).setAddTaskButton();
DOM(project1).setFormSubmit();
DOM(project1).setFormOverlay();

const newToDoForm = document.querySelector('#add-task-form');
    newToDoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
            
    const title = document.querySelector('#inputTitle').value;
    const desc = document.querySelector('#inputDesc').value;
    const date = document.querySelector('#inputDate').value;
    const priority = document.querySelector('#inputPriority').value;
    
    project1.addToDo(new ToDo(title, desc, new Date(date), priority));

    newToDoForm.reset();
});
newToDoForm.style.display = 'none';

window.DOM = DOM;
window.project1 = project1;