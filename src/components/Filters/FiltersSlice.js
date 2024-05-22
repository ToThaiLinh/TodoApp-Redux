// const initState = {
//         search: "",
//         status: 'All', 
//         priority: []
// }
// const filtersReducer = (state=initState, action) => {
//     /*
//     action = {
//         type: 'todoList/addTodo',
//         payload: {id = 5, name: 'Learn', completed: true, priority: 'Low'}
//     }
//     */
//     switch(action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//                 }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }  
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;

import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
        search: "",
        status: 'All', 
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            //mutation
            state.search = action.payload;
        },//{type: 'filters/searchFilterChange'}
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        } ,
        priorityFilterChange: (state, action) => {
            state.priority = action.payload;
        },
    },
})
