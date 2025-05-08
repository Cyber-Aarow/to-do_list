export default function setupBaseUI() {
    const setProjectButton = (projectButton) =>{
        projectButton.addEventListener('click', () => {
            resetLists();
        });
    };
    
    const setOrderButton = () =>{
        let orderButton = document.querySelector('.order-button');
        orderButton.addEventListener('click', () => {
            setTimeout(()=>{
                if(project.getOrder() === 'priority'){
                    project.sortByDate();
                    orderButton.innerHTML = "Order: Date";
                }
                else if(project.getOrder() === 'date'){
                    project.sortByPriority();
                    orderButton.innerHTML = "Order: Priority";                
                }
                resetLists();}, 50)
        });
    };

    const setAddTaskButton = () =>{
        let addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.addEventListener('click', () =>{
            newToDoForm.style.display = 'block';
            formOverlay.classList.add('visible');
        });
    }

    const setFormSubmit = () =>{
        newToDoForm.addEventListener('submit', (event) =>{
            event.preventDefault();
            newToDoForm.style.display = 'none';
            formOverlay.classList.remove('visible');
            resetLists();
        });
    };

    const setFormOverlay = () =>{
        formOverlay.addEventListener('click', () =>{
            newToDoForm.style.display = 'none';
            formOverlay.classList.remove('visible');
        });
    };

    return{
        setOrderButton,
        setAddTaskButton,
        setFormSubmit,
        setFormOverlay
    }
}