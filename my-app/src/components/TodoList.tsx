import Todo from "./Todo";
type todoParams = {
  todos: Array<any>;
  setTodos: (value: any) => void;
  filteredTodos: Array<any>;
};

const ToDo = ({ todos, setTodos, filteredTodos }: todoParams) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
