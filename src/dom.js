export default function DOM(project){
    let ul = document.querySelector('ul');
    let rightHolder = document.querySelector('#right-holder');
    let leftHolder = document.querySelector('#left-holder');

    const makeList = () =>{
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
            rightHolder.appendChild(ul);
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
        console.log("Before clearing: ", rightHolder.childNodes);
        ul.replaceChildren();
        console.log("After clearing: ", rightHolder.childNodes);
    };
    
    const setOrderButton = (order) =>{
        let orderButton = document.querySelector('.order-button');
        orderButton.addEventListener('click', () => {
            if(order === 'priority'){
                project.sortByDate();
            }
            else if(order === 'date'){
                project.sortByPriority();
            }
            clearList();
            setTimeout(makeList, 0);
        });
    };


    return{
        makeList,
        clearList,
        setOrderButton
    };
}