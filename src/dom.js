export default function DOM(project){
    const toDoList = document.querySelector('.to-do-list');
    const finishedList = document.querySelector('.finished-list')
    const newToDoForm = document.querySelector('#add-task-form');


    const showList = () =>{
        for(const toDo of project.getList()){
            let li = document.createElement('li');
            let date = document.createElement('div');
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let leftContainer = document.createElement('div');
            let upperContainer = document.createElement('div');
            let rightContainer = document.createElement('div');
            let removeButton = document.createElement('button');

            let checkbox = makeCheckbox();
            setCheckbox(checkbox, toDo);
            setRemoveButton(removeButton, toDo);
            if(toDo.getFinished()) {
                li.classList.add('finished');
                checkbox.checked = true;
            }

            li.classList.add('todo');
            date.classList.add('date');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');
            upperContainer.classList.add('upper-container');
            rightContainer.classList.add('right-container');
            removeButton.classList.add('remove-button')

            date.innerHTML = toDo.getDate();
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            removeButton.innerHTML = 'X';
            

            upperContainer.append(checkbox, title);
            leftContainer.append(upperContainer, desc);
            rightContainer.append(removeButton, date);
            
            li.append(leftContainer, rightContainer);

            setPriority(toDo, li);
            
            toDoList.appendChild(li);
        }
    };

    const showFinishedList = () =>{
        for(const toDo of project.getFinishedList()){
            let li = document.createElement('li');
            let date = document.createElement('div');
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let leftContainer = document.createElement('div');
            let upperContainer = document.createElement('div');


            let checkbox = makeCheckbox();
            setCheckbox(checkbox, toDo);
            checkbox.checked = true;
            li.classList.add('finished', 'todo');
            date.classList.add('date');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');
            upperContainer.classList.add('upper-container');

            date.innerHTML = toDo.getDate();
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            
            

            upperContainer.append(checkbox, title);
            leftContainer.append(upperContainer, desc);
            
            li.appendChild(leftContainer);
            li.appendChild(date);

            setPriority(toDo, li);
            
            finishedList.appendChild(li);
        }
    };

    const resetLists = () =>{
        setTimeout(clearList, 0);
        setTimeout(showList, 0);
        setTimeout(showFinishedList, 0);
    };

    const makeCheckbox = () =>{
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        return checkbox;
    };

    const setCheckbox = (checkbox, toDo) =>{
        checkbox.addEventListener('change', () =>{
            project.toggleFinished(toDo);
            resetLists();
        });
    };

    const setRemoveButton = (removeButton, toDo) =>{
        removeButton.addEventListener('click', () =>{
            project.removeToDo(toDo);
            resetLists();
        });
    }

    const setPriority = (toDo, li) =>{
        if(toDo.getPriority() === 'unrushed'){
            li.classList.add('unrushed');
        }
        else if(toDo.getPriority() === 'moderate'){
            li.classList.add('moderate');
        }
        else if(toDo.getPriority() === 'urgent'){
            li.classList.add('urgent');
        }
    };

    const clearList = () =>{
        toDoList.replaceChildren();
        finishedList.replaceChildren();
    };
    
    const setOrderButton = () =>{
        let orderButton = document.querySelector('.order-button');
        orderButton.addEventListener('click', () => {
            if(project.getOrder() === 'priority'){
                project.sortByDate();
                orderButton.innerHTML = "Order: Date";
            }
            else if(project.getOrder() === 'date'){
                project.sortByPriority();
                orderButton.innerHTML = "Order: Priority";                
            }
            resetLists();
        });
    };

    const setAddTaskButton = () =>{
        let addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.addEventListener('click', () =>{
            newToDoForm.style.display = 'block';
        });
    }

    const setFormSubmit = () =>{
        newToDoForm.addEventListener('submit', (event) =>{
            event.preventDefault();
            newToDoForm.style.display = 'none';
            resetLists();
        });
    };


    return{
        showList,
        clearList,
        setOrderButton,
        setAddTaskButton,
        setFormSubmit
    };
}