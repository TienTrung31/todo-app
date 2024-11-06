import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { X } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import './CalendarModal.css';

const CalendarModal = ({ isOpen, onClose, onDateSelect }) => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    }

    const handleAccept = () => {
        onDateSelect(date);
        onClose();
    }

    return (
        <div>
            {/* Modal Backdrop */}
            {isOpen && (
                <div className=" fixed inset-0 z-10 bg-black bg-opacity-70 flex items-center justify-center p-4">
                    {/* Modal Content */}
                    <div className="bg-white rounded-lg w-full max-w-md relative">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Todo Calendar</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4">
                            <div className="text-gray-600 calendar-container">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={date}
                                    selectRange={false}
                                />
                            </div>

                            <p className="text-center mt-4">
                                <span className="font-bold">Selected date:</span>{' '}
                                {date.toDateString()}
                            </p>

                            {/* {Array.isArray(date) ? (
                                isSameDay(date[0], date[1]) ? (
                                    <p className="text-center">
                                        <span className="font-bold">Selected date:</span>{' '}
                                        {date[0].toDateString()}
                                    </p>
                                ) : (
                                    <p className="text-center">
                                        <span className="font-bold">Start:</span>{' '}
                                        {date[0].toDateString()}
                                        &nbsp;|&nbsp;
                                        <span className="font-bold">End:</span>{' '}
                                        {date[1].toDateString()}
                                    </p>
                                )
                            ) : (
                                <p className="text-center">
                                    <span className="font-bold">Selected date:</span>{' '}
                                    {date.toDateString()}
                                </p>
                            )} */}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t flex justify-end space-x-2">
                            <button
                                onClick={onClose}
                                className="px-4 font-bold py-2 border rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-4 font-bold py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarModal;