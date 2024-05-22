import { createSelector } from 'reselect'

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);

//     const todosRemaining = state.todoList.filter(todo => {
//         return todo.name.includes(searchText);
//     });
    
//     return todosRemaining;
// }

// export const searchTextSelector = (state) => state.filters.search;

const searchTextSelector = (state) => state.filters.search;
const statusSelector  = (state) => state.filters.status;
const prioritySelector  = (state) => state.filters.priority;
const todoListSelector = (state) => state.todoList;

export const todosListRemainingSelector = createSelector(
    [todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritySelector],
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All') {
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority):todo.name.includes(searchText);
            }
            else {
                return (
                    todo.name.includes(searchText) &&
                    (status === 'Completed' ?
                        todo.completed :
                        !todo.completed) &&
                    (priorities.length ? priorities.includes(todo.priority) : true)
                );
            }
        });
    }

)