import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';

const CreateTodo = () => {
    const [todo, setTodo] = useState({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        category: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title.trim()) {
            dispatch(addTodo(todo));

            // Reset form
            setTodo({
                title: '',
                date: '',
                startTime: '',
                endTime: '',
                description: '',
                category: ''
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mb-4">
            <h1 className="text-3xl font-bold mb-4">Create New Task</h1>
            <label className="block text-gray-500 font-medium mb-2">Title</label>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={handleChange}
                className="custom-input"
                placeholder="Add a todo"
            />
            {/* Day */}
            <label className="block text-gray-500 font-medium mb-2">Date</label>
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleChange}
                className="custom-input"
            />
            {/* Time */}
            <div className="grid grid-cols-2 gap-6 ">
                <div>
                    <label className="block text-gray-500 font-medium mb-2">Start Time</label>
                    <input
                        type="time"
                        name="startTime"
                        value={todo.startTime}
                        onChange={handleChange}
                        className="custom-input"
                    />
                </div>
                <div>
                    <label className="block text-gray-500 font-medium mb-2">End Time</label>
                    <input
                        type="time"
                        name="endTime"
                        value={todo.endTime}
                        onChange={handleChange}
                        className="custom-input"
                    />
                </div>

            </div>
            {/* Description */}
            <label className="block text-gray-500 font-medium mb-2">Description</label>
            <textarea
                name="description"
                value={todo.description}
                onChange={handleChange}
                className="custom-input h-32"></textarea>

            {/* Category */}
            <label className="block text-gray-500 font-medium mb-2">Category</label>
            <select
                name="category"
                value={todo.category}
                onChange={handleChange}
                className="custom-input"
            >
                <option value="">Select a category</option>
                <option value="Marketing">Marketing</option>
                <option value="Meeting">Meeting</option>
                <option value="Dev">Dev</option>
                <option value="Mobile">Mobile</option>
                <option value="UI Design">UI Design</option>
                <option value="HTML">HTML</option>
            </select>
            <div className="flex justify-center mt-6">
                <button type="submit" className="bg-sky-500 text-white text-xl p-2 rounded-xl w-8/12 h-12 font-bold hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:ring focus:ring-offset-indigo-300">Create New Task</button>
            </div>
        </form>
    );
};

export default CreateTodo;