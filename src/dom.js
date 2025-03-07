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
            let upperContainer = document.createElement('div');

            li.classList.add('todo');
            date.classList.add('date');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');
            upperContainer.classList.add('upper-container');

            date.innerHTML = toDo.getDate();
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            
            let checkbox = makeCheckbox();
            upperContainer.append(checkbox, title);
            leftContainer.append(upperContainer, desc);
            
            li.appendChild(leftContainer);
            li.appendChild(date);

            setPriority(toDo, li);
            
            ul.appendChild(li);
        }
    };

    const makeCheckbox = () =>{
        let checkboxWrapper = document.createElement('div');
        let checkbox = document.createElement('input');
        let svg = document.createElement('svg');
        let circle = document.createElement('circle');
        let polyline = document.createElement('polyline');

        checkboxWrapper.classList.add('checkbox-wrapper-31');
        circle.classList.add('background');
        polyline.classList.add('check');
        
        checkbox.type = 'checkbox';

        svg.setAttribute('viewBox', '0 0 35.6 35.6');
        circle.setAttribute('cx', '17.8');
        circle.setAttribute('cy', '17.8');
        circle.setAttribute('r', '14.37');
        polyline.setAttribute('points', '11.78 18.12 15.55 22.23 25.17 12.87');

        checkboxWrapper.append(checkbox, svg, circle, polyline);
        return checkboxWrapper;
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