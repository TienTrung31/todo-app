import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setFilterDate, clearFilterDate } from '../../redux/actions/todoActions';
import { Check, Trash2, X } from 'lucide-react';
import WeeklyCalendar from './WeeklyCalender';
import CalendarModal from './CalendarModel';
import { LuCalendarSearch } from "react-icons/lu";
import TodoDetail from '../TodoDetail/TodoDetail';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filterDate = useSelector(state => state.filterDate);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const bgColors = [
    'bg-pink-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-yellow-100',
    'bg-orange-100',
    'bg-teal-100',
    'bg-indigo-100'
  ];

  console.log(todos)

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDateSelect = (date) => {
    dispatch(setFilterDate(date));
  };

  const handleClearFilter = () => {
    dispatch(clearFilterDate());
  };

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
  };

  const handleBackToList = () => {
    setSelectedTodo(null);
  };

  const formatTime = (time) => {
    return time ? new Date(`2000-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  };

  const getRandomColor = (index) => {
    // Sử dụng index của todo để lấy màu, đảm bảo mỗi todo giữ nguyên màu khi re-render
    return bgColors[index % bgColors.length];
  };

  const filteredTodos = todos.filter(todo => {
    if (!filterDate) return true;

    const todoDate = new Date(todo.date);
    return (
      todoDate.getFullYear() === filterDate.getFullYear() &&
      todoDate.getMonth() === filterDate.getMonth() &&
      todoDate.getDate() === filterDate.getDate()
    );
  });

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <h2 className="text-3xl font-bold mb-4">Todo List</h2>
        <div className="flex justify-end items-center space-x-4">

          <button
            onClick={openModal}
            className=" pb-3 text-sky-400 rounded-lg w-17"
          >
            <LuCalendarSearch size={40} />
          </button>
        </div>
      </div>

      <CalendarModal
        isOpen={isOpen}
        onClose={closeModal}
        onDateSelect={handleDateSelect}
      />
      <WeeklyCalendar />

      <div className="grid grid-cols-3  mt-6">
        <h3 className="text-xl font-bold ">Task:</h3>
        {filterDate && (
          <div className="flex items-center bg-sky-100 px-2 py-2 rounded-lg col-span-2">
            <span className="text-sky-700 mr-6">
              Filtered by: {filterDate.toDateString()}
            </span>
            <button
              onClick={handleClearFilter}
              className="text-sky-700 hover:text-sky-900"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>

      {filteredTodos.length === 0 ? (
        <p className="text-gray-500 pt-3">
          {filterDate
            ? `No todos found for ${filterDate.toDateString()}`
            : 'No todos yet. Add a new task above!'}
        </p>
      ) : (
        <ul className="space-y-7 h-[600px] overflow-y-auto px-4 py-4">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className={`${getRandomColor(index)} rounded-3xl p-4 hover:shadow-lg ${todo.completed ? 'opacity-50' : ''}`}
              onClick={() => handleTodoClick(todo)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-semibold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`p-1 rounded-full ${todo.completed ? 'bg-green-500' : 'bg-gray-200'}`}
                  >
                    <Check
                      size={20}
                      className={todo.completed ? 'text-white' : 'text-gray-500'}
                    />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={25} />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>Date:</strong> {todo.date}</p>
                {/* <p><strong>Time:</strong> {formatTime(todo.startTime)} - {formatTime(todo.endTime)}</p> */}
                <p><strong>Category:</strong> <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">{todo.category}</span></p>
              </div>
              {/* <p className="mt-2 text-gray-700">{todo.description}</p> */}
            </li>
          ))}
        </ul>
      )}

      {selectedTodo && (
        <div className="fixed top-0 left-0 bg-white shadow-lg w-full h-full p-4">
          <TodoDetail
            todo={selectedTodo}
            onBack={handleBackToList}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;