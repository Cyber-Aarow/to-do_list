import ToDo from './todo.js';
import Project from './project.js';
import DOM from './dom.js';
import './main.css';

let project1 = Project();

project1.addToDo(new ToDo('Dinner', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project1.addToDo(new ToDo('Bible Study', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project1.addToDo(new ToDo('Text Darren', 'Try to network with a web dev. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));


DOM(project1).makeList();
DOM(project1).setOrderButton();

window.DOM = DOM;
window.project1 = project1;