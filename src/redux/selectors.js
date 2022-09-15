
export const todoListSelector = (state) => {

    const todosFilter = state.todoList.filter((todo) => {
        if (state.filter.status === 'All' && state.filter.priority.length === 0) {
            return todo.name.includes(state.filter.search)
        }
        else if (state.filter.status === 'All' && state.filter.priority.length) {
            return todo.name.includes(state.filter.search) && state.filter.priority.includes(todo.priority)
        }
        return todo.name.includes(state.filter.search)
            && (state.filter.status === 'Completed'
                ? todo.completed
                : !todo.completed)
            // && (prioritySelector
            //     ? state.filter.priority.includes(todo.priority)
            //     : true)
    })
    return todosFilter;
}
export const searchSelector = (state) => state.filter.search;

export const statusSelector = (state) => state.filter.status;

export const prioritySelector = (state) => state.filter.priority;
