export default function Project(){
    let list = [];
    let title = "";
    let order = "priority";

    const addToDo = (newToDo) =>{
        let index = list.findIndex(toDo => toDo.getDate() > newToDo.getDate());
        if(index === -1) list.push(newToDo);
        else list.splice(index, 0, newToDo);
    };

    const sortByDate = () =>{
        list.sort((a, b) => b.getDate() - a.getDate());
        order = 'date';
    };

    const sortByPriority = () =>{
        let urgent_list = [], moderate_list = [], unrushed_list = [];
        let new_list = [];
        for(const toDo of list){
            if(toDo.getPriority() === 'urgent') urgent_list.push(toDo);
            else if(toDo.getPriority() === 'moderate') moderate_list.push(toDo);
            else if(toDo.getPriority() === 'unrushed') unrushed_list.push(toDo);
        }
        for(const toDo of urgent_list) new_list.push(toDo);
        for(const toDo of moderate_list) new_list.push(toDo);
        for(const toDo of unrushed_list) new_list.push(toDo);
        list = [...new_list];
        order = 'priority';
    };

    const getTitles = () =>{
        return list.map(toDo => toDo.getTitle());
    };

    const getList = () =>{
        return list;
    };

    const getOrder = () =>{
        return order;
    };

    return{
        addToDo,
        sortByDate,
        sortByPriority,
        getTitles,
        getList,
        getOrder
    };
}