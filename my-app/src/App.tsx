import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';

const App = () => {
  const [inputData, updateInputData] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch(status) {
      case COMPLETED:
        setFilteredTodos(todos.filter(todo => todo[`${COMPLETED}`] === true));
        break;
      case UNCOMPLETED:
        setFilteredTodos(todos.filter(todo => todo[`${COMPLETED}`] === false));
        break
      default:
        setFilteredTodos(todos);
        break;
    };
  }, [todos, status]);

  return (
    <div className="App">
      <header><h1>Ernest's ToDo List</h1></header>
      <Form
        todos={todos}
        updateInputData={updateInputData}
        setTodos={setTodos}
        inputData={inputData}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
