import React from 'react';

const Navigation = ({ setCurrentView }) => {
    return (
        <div className="mt-14 flex flex-col justify-end pb-6">
            <ul className="grid grid-cols-3 gap-4 text-center">
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('home')} className="home-nav"> </button>
                </li>
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('create')} className="create-nav"> </button>
                </li>
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('list')} className="list-nav"> </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;