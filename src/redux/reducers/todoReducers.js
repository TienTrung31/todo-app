import {
    FETCH_TODOS_SUCCESS,
    SET_FILTER_DATE,
    CLEAR_FILTER_DATE,
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS,
    UPDATE_TODO_SUCCESS
} from '../actions/todoActions'

const initialState = {
    todos: [],
    filterDate: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };

        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, ...action.payload }
                        : todo
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