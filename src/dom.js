export default function DOM(project){
    const toDoList = document.querySelector('.to-do-list');
    const finishedList = document.querySelector('.finished-list');
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

    const showList = () =>{
        for(const toDo of project.getList()){
            let li = document.createElement('li');
            let date = document.createElement('div');
            let dayBlocker = document.createElement('div');
            let title = document.createElement('h1');
            let desc = document.createElement('p');
            let leftContainer = document.createElement('div');
            let upperContainer = document.createElement('div');
            let rightContainer = document.createElement('div');
            let removeButton = document.createElement('button');

            let checkboxWrapper = makeCheckbox(toDo);
            setRemoveButton(removeButton, toDo);

            li.classList.add('todo');
            date.classList.add('date');
            dayBlocker.classList.add('day-blocker');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');
            upperContainer.classList.add('upper-container');
            rightContainer.classList.add('right-container');
            removeButton.classList.add('remove-button')

            const dayOfWeek = toDo.getDate().toLocaleDateString('en-US', {weekday: 'short'});
            const monthDay = toDo.getDate().toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
            date.innerHTML = `${dayOfWeek}<br>${monthDay}`;
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            removeButton.innerHTML = 'X';
            
            
            upperContainer.append(checkboxWrapper, title);
            leftContainer.append(upperContainer, desc);
            rightContainer.append(date, dayBlocker, removeButton);
            
            li.append(leftContainer, rightContainer);

            setPriority(toDo, li);
            li.contentEditable = 'true';
            editToDo(li, toDo.changeToDo.bind(toDo));

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
            let removeButton = document.createElement('button');

            let checkbox = makeCheckbox(toDo);
            setRemoveButton(removeButton, toDo);


            li.classList.add('finished', 'todo');
            date.classList.add('date');
            title.classList.add('title');
            desc.classList.add('desc');
            leftContainer.classList.add('left-container');
            upperContainer.classList.add('upper-container');
            removeButton.classList.add('remove-button')

            date.innerHTML = toDo.getDate();
            title.innerHTML = toDo.getTitle();
            desc.innerHTML = toDo.getDescription();
            removeButton.innerHTML = 'X';


            upperContainer.append(checkbox, title);
            leftContainer.append(upperContainer, desc);
            
            li.append(leftContainer);
            li.append(date, removeButton);

            setPriority(toDo, li);
            
            finishedList.appendChild(li);
        }
    };

    const resetLists = () =>{
        setTimeout(clearList, 0);
        setTimeout(showList, 0);
        setTimeout(showFinishedList, 0);
    };

    const makeCheckbox = (toDo) =>{
        let checkboxWrapper = document.createElement('div');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        let span = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkboxWrapper.classList.add('checkbox-wrapper');
        if(toDo.getFinished()) checkbox.checked = true;

        span.addEventListener('click', (event) =>{
            project.toggleFinished(toDo);
            resetLists();
        });
        label.addEventListener('click', (event) =>{
            event.preventDefault();
        });

        label.append(checkbox, span);
        checkboxWrapper.append(label);
        checkboxWrapper.contentEditable = false;
        return checkboxWrapper;
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

    const parseDate = (text) =>{
        const parts = text.slice(3).split(' ');

        if(parts.length !== 2) return null;

        const monthStr = parts[0];
        const dayStr = parts[1];
        const monthIndex = months.indexOf(monthStr);

        if(monthIndex === -1) return null;
        
        const day = parseInt(dayStr, 10);
        const now = new Date();
        const year = now.getFullYear();
        return new Date(year, monthIndex, day);
    };

    const editToDo = (li, updateFunc) =>{
        li.addEventListener('blur', ()=>{
            const title = li.querySelector('.title');
            const desc = li.querySelector('.desc');
            const date = li.querySelector('.date');
            const newDate = parseDate(date.textContent.trim());
            if(newDate !== null){
                updateFunc(title.textContent.slice(0, 32), desc.textContent.slice(0, 150), newDate);
            }
            else{
                updateFunc(title.textContent.slice(0, 32), desc.textContent.slice(0, 150));     
            }
        });
    };

    const clearList = () =>{
        toDoList.replaceChildren();
        finishedList.replaceChildren();
    };

    return{
        resetLists,
    };
}