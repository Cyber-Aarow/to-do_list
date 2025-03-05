export default function DOM(project){
    const ul = document.querySelector('ul');
    const newToDoForm = document.querySelector('#add-task-form');


    const showList = () =>{
        for(const toDo of project.getList()){
            console.log(toDo);
            let li = document.createElement('li');
            let date = document.createElement('div');
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let leftContainer = document.createElement('div');

            li.classList.add('todo');
            date.classList.add('date');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');

            date.innerHTML = toDo.getDate();
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            
            leftContainer.appendChild(title);
            leftContainer.appendChild(desc);
            
            li.appendChild(leftContainer);
            li.appendChild(date);

            setPriority(toDo, li);
            
            ul.appendChild(li);
        }
    };

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
        ul.replaceChildren();
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
            clearList();
            setTimeout(showList, 0);
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
            clearList();
            setTimeout(showList, 0);
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