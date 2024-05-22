const initState = {
        search: "",
        status: 'All', 
        priority: []
}
const filtersReducer = (state=initState, action) => {
    /*
    action = {
        type: 'todoList/addTodo',
        payload: {id = 5, name: 'Learn', completed: true, priority: 'Low'}
    }
    */
    switch(action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
                }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }  
        case 'filters/priorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;