const initState = {
    filter: {
        search: "",
        status: "All",
        priority: []
    },
    todoList: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
        { id: 2, name: "Learn ReactJS", completed: true, priority: "Medium" },
        { id: 3, name: "Learn English", completed: true, priority: "Low" }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'todoList/changeTodoStatus':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    // state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
                ]
            }
            // state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)

        case 'search/searchFilter':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
        case 'search/statusFilter':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload
                }
            }
        case 'search/priorityFilter':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    priority: action.payload
                }
            }
        default: return state;
    }
}

export default rootReducer