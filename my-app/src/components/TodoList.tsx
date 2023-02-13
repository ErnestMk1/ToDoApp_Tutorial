import Todo from "./Todo";
type todoParams = {
  todos: Array<any>;
  setTodos: (value: any) => void;
};

const ToDo = ({ todos, setTodos }: todoParams) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
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
