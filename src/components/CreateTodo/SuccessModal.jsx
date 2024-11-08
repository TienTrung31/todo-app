import React from 'react';
import { Check } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 transform transition-all duration-300 ease-out animate-modal-show">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Success!</h3>
                    <p className="text-gray-700 text-center mb-6">Your task has been created successfully.</p>
                    <button
                        onClick={onClose}
                        className="bg-sky-500 font-bold text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;