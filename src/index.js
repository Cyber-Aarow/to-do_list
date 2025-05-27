import ToDo from './todo.js';
import Project from './project.js';
import DOM from './dom.js';
import {setProjectButton, setOrderButton, updateOrderButtonText,
     setAddTaskButton, setFormOverlay, setFormSubmit,
     createProjectButton, setAddProjectButton
    } from './ui.js';
import './main.css';

const newToDoForm = document.querySelector('#add-task-form');
const newProjForm = document.querySelector('#add-project-form');
const formOverlay = document.querySelector('.form-overlay');

let project1Button = document.querySelector('.project1');
let project2Button = document.querySelector('.project2');
let project1 = Project();
let project2 = Project();

const allProjects = [project1, project2];
const allProjButtons = [project1Button, project2Button];

function displayProject(){
    DOM(currentProject).resetLists();
    setAddTaskButton(newToDoForm, formOverlay);
    setAddProjectButton(newProjForm, formOverlay);
    setFormOverlay(newToDoForm, formOverlay);
    setFormOverlay(newProjForm, formOverlay);
    setFormSubmit(newToDoForm, formOverlay, ()=> DOM(currentProject).resetLists());
    setFormSubmit(newProjForm, formOverlay);
    displayOrderButton();
}

function displayOrderButton(){
    let orderButton = document.querySelector('.order-button');
    orderButton = setOrderButton(orderButton, ()=> changeOrder(currentProject, orderButton));
    updateOrderButtonText(orderButton, currentProject.getOrder());
}

function switchProject(project){
    const index0 = allProjects.indexOf(currentProject);
    const index1 = allProjects.indexOf(project);

    allProjButtons[index0].classList.remove('current-project');
    allProjButtons[index1].classList.add('current-project');
    
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

function createProject(title){
    const newProject = Project(title);
    allProjects.push(newProject);
    const index = allProjects.indexOf(newProject) + 1;

    const button = createProjectButton(index, title, ()=> switchProject(newProject));
    allProjButtons.push(button);
    switchProject(newProject);
}

newToDoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
            
    const title = document.querySelector('#inputTitle').value;
    const desc = document.querySelector('#inputDesc').value;
    const date = document.querySelector('#inputDate').value;
    const priority = document.querySelector('#inputPriority').value;
    
    currentProject.addToDo(new ToDo(title, desc, new Date(date), priority));

    newToDoForm.reset();
});

newProjForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const title = document.querySelector('#inputProject').value;
    createProject(title);

    newProjForm.reset();
});

newToDoForm.style.display = 'none';
newProjForm.style.display = 'none';


let currentProject = project1;

project1.addToDo(new ToDo('Dinner', 'Eat spaghetti.', new Date(2025, 1, 22), 'moderate'));
project1.addToDo(new ToDo('Bible Study', 'Go over James.', new Date(2025, 1, 25), 'urgent'));
project1.addToDo(new ToDo('Juggle', 'Playing catch with yourself. This is added sentence space to test the wrapping function.', new Date(2025, 1, 24), 'unrushed'));

displayProject();

project2.addToDo(new ToDo('MONKEY', 'OOH OOH. AAH AAH.', new Date(2025, 1, 22), 'moderate'));
project2.addToDo(new ToDo('THROW', 'BANANAS. ROCKS. MUD.', new Date(2025, 1, 25), 'urgent'));
project2.addToDo(new ToDo('WAAAAAAAAAAR', ' AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.', new Date(2025, 1, 24), 'unrushed'));


setProjectButton(project1Button, ()=> switchProject(project1));
setProjectButton(project2Button, ()=> switchProject(project2));

window.DOM = DOM;
window.project1 = project1;