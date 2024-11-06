import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { updatedTodos } from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const TodoDetail = ({ todo, onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo || null);
    const dispatch = useDispatch();

    const editMode = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        dispatch(updatedTodos(editedTodo));
        setIsEditing(false);
    };

    if (!editedTodo) return null;

    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                <div className=" text-sky-400 cursor-pointer"
                    onClick={onBack}>
                    <IoArrowBack size={40} />
                </div>
                <div className=" flex justify-end text-sky-400 "
                    onClick={editMode}>
                    <FaRegEdit size={40} />
                </div>
            </div>

            <div className="flex items-center ">
                <div className="text-3xl font-bold my-1 pr-3">{editedTodo.title}</div>
                <div className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-base">{editedTodo.category}</div>
            </div>

            <div className=" ">
                <div className="flex items-center my-3">
                    <label className="block text-gray-500 font-medium pr-4">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={editedTodo.date}
                        onChange={handleInputChange}
                        className="w-40 p-2 border-gray-300 rounded-2xl shadow-md focus:border-blue-500 focus:ring-blue-500 disabled:bg-sky-50 disabled:text-gray-500"
                        disabled={!isEditing}
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="block text-gray-500 font-medium pr-4 ">Time</label>
                    <div className="flex space-x-4">
                        <input
                            type="time"
                            name="startTime"
                            value={editedTodo.startTime || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border-gray-300 rounded-2xl shadow-md focus:border-blue-500 focus:ring-blue-500 disabled:bg-sky-50 disabled:text-gray-500"
                            disabled={!isEditing}
                        />
                        <input
                            type="time"
                            name="endTime"
                            value={editedTodo.endTime || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border-gray-300 rounded-2xl shadow-md focus:border-blue-500 focus:ring-blue-500 disabled:bg-sky-50 disabled:text-gray-500"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-gray-500 font-medium mb-2">Description</label>
                <textarea
                    name="description"
                    value={editedTodo.description || ''}
                    onChange={handleInputChange}
                    className="w-full p-3 border-gray-300 rounded-2xl shadow-md focus:border-blue-500 focus:ring-blue-500 disabled:bg-sky-50 disabled:text-gray-500"
                    rows={20}
                    disabled={!isEditing}
                />
            </div>

            {isEditing && (
                <div className="flex justify-center mt-2 space-x-2">
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 text-xl font-bold bg-sky-500 text-white rounded-xl hover:bg-sky-700 transition-colors"
                    >
                        Save
                    </button>
                </div>
            )}
        </div>
    )
};
export default TodoDetail;