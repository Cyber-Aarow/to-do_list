export default function DOM(project){
    let ul = document.createElement('ul');
    let holder = document.querySelector('#holder');
    
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
            holder.appendChild(ul);
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
    
    return{
        makeList
    };
}