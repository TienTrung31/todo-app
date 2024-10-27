import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    FETCH_TODOS_SUCCESS,
    SET_FILTER_DATE,
    CLEAR_FILTER_DATE
} from '../actions/todoActions'

const initialState = {
    todos: [],
    filterDate: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    ...action.payload
                }]
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.payload)
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {
                    ...todo, completed: !todo.completed
                } : todo
                )
            };

        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload
            };

        case SET_FILTER_DATE:
            return {
                ...state,
                filterDate: action.payload
            };

        case CLEAR_FILTER_DATE:
            return {
                ...state,
                filterDate: null
            };

        default:
            return state;
    }
};

export default todoReducer;