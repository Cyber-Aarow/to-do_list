export function setProjectButton(projectButton, onClick) {
    projectButton.addEventListener('click', onClick);
}

export function setOrderButton(orderButton, onClick){
    const newOrderButton = orderButton.cloneNode(true);
    orderButton.parentNode.replaceChild(newOrderButton, orderButton);
    newOrderButton.addEventListener('click', onClick);
    return newOrderButton;
}

export function updateOrderButtonText(orderButton, order){
    orderButton.textContent = order === 'date' ? 'Order: Date' : 'Order: Priority';
}

export function setAddTaskButton(newToDoForm, formOverlay){
    const addTaskButton = document.querySelector('.add-task-button')
    addTaskButton.addEventListener('click', () =>{
        newToDoForm.style.display = 'block';
        formOverlay.classList.add('visible');
    });
}

export function setFormOverlay(newToDoForm, formOverlay){
    formOverlay.addEventListener('click', () =>{
        newToDoForm.style.display = 'none';
        formOverlay.classList.remove('visible');
    });
}

export function setFormSubmit(newToDoForm, formOverlay, resetLists){
    newToDoForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        newToDoForm.style.display = 'none';
        formOverlay.classList.remove('visible');
        resetLists();
    });
};