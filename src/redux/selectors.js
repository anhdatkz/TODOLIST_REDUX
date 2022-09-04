
export const todoListSelector = (state) => {
    const todosFilter = state.todoList.filter((todo) => {
        return todo.name.includes(state.filter.search)
    })
    return todosFilter;
}
export const searchSelector = (state) => state.filter.search;
