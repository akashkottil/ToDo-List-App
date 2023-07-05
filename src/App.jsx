import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleInputChange = (e) => {
    setToDo(e.target.value);
  };

  const handleAddTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const handleRemoveTodo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  const handleToggleStatus = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];
    return currentDay;
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getCurrentDay()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={handleInputChange} type="text" placeholder="🖊️ Add item..." />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleToggleStatus(todo.id)}
                checked={todo.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => handleRemoveTodo(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
