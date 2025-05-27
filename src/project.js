export default function Project(){
    let list = [];
    let name = "";
    let order = "date";
    let finished_list = [];

    const getName = () =>{
        return name;
    };

    const addToDo = (newToDo) =>{
        let index = list.findIndex(toDo => toDo.getDate() > newToDo.getDate());
        if(index === -1) list.push(newToDo);
        else list.splice(index, 0, newToDo);
    };

    const removeToDo = (toDo) =>{
        let index = list.findIndex(matching => matching.getTitle() === toDo.getTitle() && matching.getDescription() === toDo.getDescription());
        list.splice(index, 1);
    };

    const sortByDate = () =>{
        list.sort((a, b) => new Date(a.getDate()) - new Date(b.getDate()));
        order = 'date';
    };

    const sortByPriority = () =>{
        let urgent_list = [], moderate_list = [], unrushed_list = [];
        for(const toDo of list){
            if(toDo.getPriority() === 'urgent') urgent_list.push(toDo);
            else if(toDo.getPriority() === 'moderate') moderate_list.push(toDo);
            else if(toDo.getPriority() === 'unrushed') unrushed_list.push(toDo);
        }
        list.length = 0;
        list.push(...urgent_list, ...moderate_list, ...unrushed_list);
        order = 'priority';
    };

    const getTitles = () =>{
        return list.map(toDo => toDo.getTitle());
    };

    const getList = () =>{
        return list;
    };

    const getFinishedList = () =>{
        return finished_list;
    };

    const getOrder = () =>{
        return order;
    };

    const moveToFinished = (toDo) =>{
        let index = list.findIndex(matching => matching.getTitle() === toDo.getTitle() && matching.getDescription() === toDo.getDescription());
        list.splice(index, 1);
        finished_list.unshift(toDo);
    };

    const moveBack = (toDo) =>{
        let index = finished_list.findIndex(matching => matching.getTitle() === toDo.getTitle() && matching.getDescription() === toDo.getDescription());
        finished_list.splice(index, 1);
        list.push(toDo);
    }

    const toggleFinished = (toDo) =>{
        toDo.toggleFinished();
        if(toDo.getFinished()) moveToFinished(toDo);
        else moveBack(toDo);
    };

    return{
        getName,
        addToDo,
        removeToDo,
        sortByDate,
        sortByPriority,
        getTitles,
        getList,
        getFinishedList,
        getOrder,
        toggleFinished
    };
}