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
        <div className="relative h-930px w-430px">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Todo App</h1>

                {currentView === 'home' && <Home />}
                {currentView === 'create' && <CreateTodo />}
                {currentView === 'list' && <TodoList />}

            </div>
            <Navigation setCurrentView={setCurrentView} />
        </div>
    );
};

export default Todo;