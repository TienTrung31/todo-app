import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, fetchTodos } from '../redux/actions/todoActions';
import './Todo.css'

const Todo = () => {
    const [input, setInput] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Todo App</h1>
            <form onSubmit={handleSubmit} className="container mb-4">
                {/* Name */}
                <label className="block text-gray-500 font-medium mb-2">Title</label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="custom-input"
                    placeholder="Add a todo"
                />
                {/* Day */}
                <label className="block text-gray-500 font-medium mb-2">Date</label>
                <input
                    type="date"
                    className="custom-input"
                />
                {/* Time */}
                <div className="grid grid-cols-2 gap-6 ">
                    <div>
                        <label className="block text-gray-500 font-medium mb-2">Start Time</label>
                        <input
                            type="time"
                            className="custom-input"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 font-medium mb-2">End Time</label>
                        <input
                            type="time"
                            className="custom-input"
                        />
                    </div>

                </div>
                {/* Description */}
                <label className="block text-gray-500 font-medium mb-2">Description</label>
                <textarea className="custom-input h-32"></textarea>

                {/* Category */}
                <label className="block text-gray-500 font-medium mb-2">Category</label>
                <div className="grid grid-cols-3 gap-2 mb-6">
                    <span className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full">Marketing</span>
                    <span className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full">Meeting</span>
                    <span className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full">Dev</span>
                    <span className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full">Mobile</span>
                    <span className="bg-pink-100 text-pink-500 py-1 px-2 rounded-full">UI Design</span>
                    <span className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full">HTML</span>

                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-sky-500 text-white p-2 rounded-xl w-8/12 h-12 font-bold hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:ring focus:ring-offset-indigo-300">Create New Task</button>
                </div>

            </form>
            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                            className="mr-2"
                        />
                        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="ml-auto bg-red-500 text-white p-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Todo;