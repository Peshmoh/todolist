import React, { useState } from 'react';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  const [editIndex, setEditIndex] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewText(todos[index].text);
  };

  const handleSave = (index) => {
    editTodo(index, newText);
    setEditIndex(null);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
          {editIndex === index ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          )}
          {editIndex === index ? (
            <button onClick={() => handleSave(index)}>Save</button>
          ) : (
            <>
              <button className='btn' onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
