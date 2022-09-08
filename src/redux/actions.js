export const addTodo = (data)=>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const changeTodoStatus = (todoId)=>{
    return {
        type: 'todoList/changeTodoStatus',
        payload: todoId
    }
}

export const searchFilter = (search)=>{
    return {
        type: 'search/searchFilter',
        payload: search
    }
}

export const statusFilter = (search)=>{
    return {
        type: 'search/statusFilter',
        payload: search
    }
}

export const priorityFilter = (search)=>{
    return {
        type: 'search/priorityFilter',
        payload: search
    }
}