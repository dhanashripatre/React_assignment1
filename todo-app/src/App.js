import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/.cache/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [todos, setTodos] = useState([]);
  
//adding a new todo item
  const addTodo = (todoText) => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header />
      <AddToDo addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
