import ToDo from './todo';
import Project from './project';

let project1 = Project();

project1.addToDo(new ToDo('Dinner', 'Eat Spaghetti', new Date(2025, 1, 22), 'moderate'));
project1.addToDo(new ToDo('Text Darren', 'Try to network with a web dev.', new Date(2025, 1, 24), 'unrushed'));
project1.getList();