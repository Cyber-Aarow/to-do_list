/*Project Buttons*/
export function setProjectButton(projectButton, onClick) {
    projectButton.addEventListener('click', onClick);
}

export function createProjectButton(number, title, onClick){
    const button = document.createElement('button');
    const header = document.querySelector('header');
    const addProjButton = document.querySelector('.add-project');

    button.classList.add(`project${number}`);

    setProjectButton(button, onClick);
    button.textContent = title;
    header.insertBefore(button, addProjButton);

    return button;
}

export function setAddProjectButton(newProjForm, formOverlay){
    const addProjButton = document.querySelector('.add-project');
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

export function setFormSubmit(form, formOverlay, doThis){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        form.style.display = 'none';
        formOverlay.classList.remove('visible');
        if(doThis === undefined){}
        else {doThis();}
    });
};

export function preventEditing(){
    const dayBlockers = document.querySelectorAll('.day-blocker');
    const removeButtons = document.querySelectorAll('.remove-button')
    window.addEventListener('DOMContentLoaded', ()=>{
        dayBlockers.forEach(dayBlocker => {
            dayBlocker.addEventListener('click', e =>{
                e.stopPropagation();
                e.preventDefault();
                console.log('poop');
            });
        });
        removeButtons.forEach(removeButton =>{
            removeButton.contentEditable = 'false';
        });      
    });
    
}