import React from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="card" >
      <ul className="list-group list-group-flush">
        <li className={todo.completed ? 'completed' : ''} >
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        />
        <span>{todo.text}</span>
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    </ul>
    </div>
  );
};

export default ToDoItem;
