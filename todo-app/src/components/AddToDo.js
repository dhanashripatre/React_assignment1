import React, { useState } from 'react';

const AddToDo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='searchBar'
        type="text"
        value={todoText}
        // input field will display the current value of todoText
        onChange={(e) => setTodoText(e.target.value)}
        //update the variable todoText with the new value entered
        placeholder="Enter a new task.."
      />
      <button type="submit "className="btn btn-primary">Add Todo</button>
     
    </form>
  );
};

export default AddToDo;
