import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';

const App = () => {
  const [inputData, updateInputData] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case COMPLETED:
        setFilteredTodos(todos.filter(todo => todo['completed'] === true));
        break;
      case UNCOMPLETED:
        setFilteredTodos(todos.filter(todo => todo['uncompleted'] === true));
        break
      default:
        setFilteredTodos(todos);
        break;
    };
  };

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
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;
