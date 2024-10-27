import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/actions/todoActions';
import CreateTodo from './CreateTodo/CreateTodo';
import TodoList from './TodoList/TodoList';
import Navigation from './Navigation/Navigation';
import Home from './TodoHome/TodoHome';
import './Todo.css';

const Todo = () => {
    const [currentView, setCurrentView] = useState('home');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div>
            <div className="relative h-[930px] w-[430px]">
                <div className="container mx-auto p-4">
                    {currentView === 'create' && <CreateTodo />}
                    {currentView === 'home' && <Home />}
                    {currentView === 'list' && <TodoList />}

                </div>
                <div className="fixed bottom-0 left-0 right-0 w-[430px] bg-white border rounded-t-[40px]">
                    <Navigation currentView={currentView} setCurrentView={setCurrentView} />
                </div>
            </div>
        </div>
    );
};

export default Todo;