import React from 'react';


const Navigation = ({ currentView, setCurrentView }) => {
    return (
        <div className="flex flex-col justify-end pb-3 pt-3">
            <ul className="grid grid-cols-3 gap-4 text-center">
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('create')}
                        className={currentView === 'create' ? 'create-active-nav' : 'create-nav'}>
                    </button>
                </li>
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('home')}
                        className={currentView === 'home' ? 'home-active-nav' : 'home-nav'}>
                    </button>
                </li>
                <li className="p-4 flex items-center justify-center">
                    <button onClick={() => setCurrentView('list')}
                        className={currentView === 'list' ? 'list-active-nav' : 'list-nav'}>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;