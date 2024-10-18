import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS_SUCCESS } from '../actions/todoActions'

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload,
                    complete: false
                }]
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
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

        default:
            return state;
    }
};

export default todoReducer;