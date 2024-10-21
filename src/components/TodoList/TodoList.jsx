import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions/todoActions';
import { Check, Trash2 } from 'lucide-react';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  console.log(todos)

  const formatTime = (time) => {
    return time ? new Date(`2000-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add a new task above!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map(todo => (
            <li key={todo.id} className={`bg-sky-100 rounded-lg shadow-md p-4 ${todo.completed ? 'opacity-50' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-semibold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`p-1 rounded-full ${todo.completed ? 'bg-green-500' : 'bg-gray-200'}`}
                  >
                    <Check size={20} className={todo.completed ? 'text-white' : 'text-gray-500'} />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={25} />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>Date:</strong> {todo.date}</p>
                <p><strong>Time:</strong> {formatTime(todo.startTime)} - {formatTime(todo.endTime)}</p>
                <p><strong>Category:</strong> <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">{todo.category}</span></p>
              </div>
              <p className="mt-2 text-gray-700">{todo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;