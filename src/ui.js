/*Project Buttons*/
export function setProjectButton(projectButton, onClick) {
    projectButton.addEventListener('click', onClick);
}

export function colorProjectButton(projectButton, project, currentProject){
    if(currentProject === project){
        projectButton.style.backgroundColor = 'rgb(125, 63, 160)';
    }
    else{
        projectButton.style.backgroundColor = 'rgb(181, 149, 199)';
    }
}

export function createProjectButton(number, name, onClick){
    const button = document.createElement('button');
    const header = document.querySelector('header');
    const addProjButton = document.querySelector('.add-project');

    button.classList.add(`project${number}`);

    setProjectButton(button, onClick);
    button.textContent = name;
    header.insertBefore(button, addProjButton);
}

export function setAddProjectButton(addProjButton, newProjForm, formOverlay){
    addProjButton.addEventListener('click', ()=>{
        newProjForm.style.display = 'block';
        formOverlay.classList.add('visible');
    });
}

/*Order Button*/
export function setOrderButton(orderButton, onClick){
    const newOrderButton = orderButton.cloneNode(true);
    orderButton.parentNode.replaceChild(newOrderButton, orderButton);
    newOrderButton.addEventListener('click', onClick);
    return newOrderButton;
}

export function updateOrderButtonText(orderButton, order){
    orderButton.textContent = order === 'date' ? 'Order: Date' : 'Order: Priority';
}

/*Add Task Button*/
export function setAddTaskButton(newToDoForm, formOverlay){
    const addTaskButton = document.querySelector('.add-task-button')
    addTaskButton.addEventListener('click', () =>{
        newToDoForm.style.display = 'block';
        formOverlay.classList.add('visible');
    });
}

/*Forms*/
export function setFormOverlay(form, formOverlay){
    formOverlay.addEventListener('click', () =>{
        form.style.display = 'none';
        formOverlay.classList.remove('visible');
    });
}

export function setFormSubmit(form, formOverlay, resetLists){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        form.style.display = 'none';
        formOverlay.classList.remove('visible');
        resetLists();
    });
};