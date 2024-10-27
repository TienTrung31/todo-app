import { useState } from 'react';

const WeeklyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const days = [
        { day: 'Mon', date: '10' },
        { day: 'Tue', date: '11' },
        { day: 'Wed', date: '12' },
        { day: 'Thu', date: '13' },
        { day: 'Fri', date: '14' },
        { day: 'Sat', date: '15' },
        { day: 'Sun', date: '16' }
    ];

    return (
        <div className="flex bg-sky-500 shadow-lg shadow-slate-500 rounded-3xl overflow-x-auto w-[392px] mx-auto">
            {days.map(({ day, date }) => (
                <div
                    key={day}
                    onClick={() => setSelectedDate(date)}
                    className={`flex cursor-pointer transition-all duration-300
            ${selectedDate === date ? 'bg-white shadow-lg rounded-3xl' : ''}`}
                >
                    <div className="w-14 h-28 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <span
                                className={`font-bold text-sm transition-all duration-300
                  ${selectedDate === date ? 'text-gray-900' : 'text-gray-100'}`}
                            >
                                {day}
                            </span>
                            <span
                                className={`font-bold mt-1 transition-all duration-300
                  ${selectedDate === date ? 'text-gray-900 text-xl' : 'text-gray-100'}`}
                            >
                                {date}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WeeklyCalendar;