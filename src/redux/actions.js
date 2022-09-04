export const addTodo = (data)=>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilter = (search)=>{
    return {
        type: 'search/searchFilter',
        payload: search
    }
}