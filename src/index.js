import ToDo from './todo.js';
import Project from './project.js';
import DOM from './dom.js';
import {setProjectButton, setOrderButton, updateOrderButtonText} from './ui.js';
import './main.css';

function displayProject(){
    DOM(currentProject).resetLists();
    DOM(currentProject).setAddTaskButton();
    DOM(currentProject).setFormSubmit();
    DOM(currentProject).setFormOverlay();

    displayOrderButton();
}

function displayOrderButton(){
    let orderButton = document.querySelector('.order-button');
    orderButton = setOrderButton(orderButton, ()=> changeOrder(currentProject, orderButton));
    updateOrderButtonText(orderButton, currentProject.getOrder());
}

function switchProject(project){
    currentProject = project;
    displayProject(currentProject);
}

function changeOrder(project, orderButton){
    setTimeout(()=>{
        if(project.getOrder() === 'priority'){
            project.sortByDate();
            orderButton.textContent = "Order: Date";
        }
        else if(project.getOrder() === 'date'){
            project.sortByPriority();
            orderButton.textContent = "Order: Priority";                
        }
        DOM(project).resetLists();}, 50)
}

let project1 = Project();
let currentProject = project1;

project1.addToDo(new ToDo('Dinner', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project1.addToDo(new ToDo('Bible Study', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project1.addToDo(new ToDo('Text Darren', 'Try to network with a web dev. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));

displayProject();



let project2 = Project();

project2.addToDo(new ToDo('MONKEY', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project2.addToDo(new ToDo('THROW', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project2.addToDo(new ToDo('WAAAAAAAAAAR', 'Try to network with a web dev. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));

let project1Button = document.querySelector('.project1');
let project2Button = document.querySelector('.project2');
setProjectButton(project1Button, ()=> switchProject(project1));
setProjectButton(project2Button, ()=> switchProject(project2));


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