import React from 'react';
import { RxQuestionMark } from "react-icons/rx";
import { deleteTodo } from '../../redux/actions/todoActions';
import { useDispatch } from 'react-redux';

const ConfirmModal = ({ isOpen, onClose, todoToDelete }) => {

    const dispatch = useDispatch();

    console.log('first', todoToDelete)

    if (!isOpen) return null;

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todoToDelete));
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 transform transition-all duration-300 ease-out animate-modal-show">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <RxQuestionMark className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-gray-700 text-center mb-6">Do you want delete this Todo ?</h3>
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={onClose}
                            className=" text-black  border font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDeleteTodo}
                            className="bg-sky-500 font-bold text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;