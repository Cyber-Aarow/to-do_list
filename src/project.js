import ToDo from './todo';

export default function Project(){
    let list = [];
    let title = "";

    const addToDo = (toDo) =>{

    };

    const sortByDate = () =>{
        list.sort((a, b) => b.getDate() - a.getDate());
    };

    const sortByPriority = () =>{
        let urgent_list = [], moderate_list = [], unrushed_list = [];
        let new_list = [];
        for(toDo of list){
            if(toDo.getPriority() = 'urgent') urgent_list.push(toDo);
            if(toDo.getPriority() = 'moderate') moderate_list.push(toDo);
            if(toDo.getPriority() = 'unrushed') unrushed_list.push(toDo);
        }
        for(toDo of urgent_list) new_list.push(toDo);
        for(toDo of moderate_list) new_list.push(toDo);
        for(toDo of unrushed_list) new_list.push(toDo);
        list = [...new_list];
    };
    return{
        addToDo,
        sortByDate,
        sortByPriority
    };
}