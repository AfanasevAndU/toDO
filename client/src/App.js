import { useState } from "react";
import Form from "./Components/Form/Form";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  
  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert("Нет целей");
    }
  }

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  
  return (
    <div className="wrapper">
      <div className="container">
          <h1 className="headTitle">Задачи на сегодня</h1>
          <h1 className="title">ToDO</h1>
          <Form 
              putTodo={putTodo}
          />
          <ul className="todos">
              {
                todos.map(todo => {
                  return(
                    <li className={todo.done ? "todo done" : "todo"} key={todo.id} onClick={e => completeTodo(todo.id)}>
                      {todo.text}
                        <button className="delete" onClick={e => {
                          e.stopPropagation();
                          deleteTodo(todo.id);
                        }}>Удалить</button>
                    </li>
                  );
                })
              }
          </ul>
      </div>
    </div>
  );
}

export default App;
