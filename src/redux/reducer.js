const initState = {
    filter: {
        search: "",
        status: "All",
        priority: []
    },
    todoList: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
        { id: 2, name: "Learn ReactJS", completed: false, priority: "Medium" },
        { id: 3, name: "Learn English", completed: false, priority: "Low" }
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
        case 'search/searchFilter':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
        default: return state;
    }
}

export default rootReducer