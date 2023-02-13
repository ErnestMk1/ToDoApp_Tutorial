type FormParams = {
  updateInputData: (value: string) => void;
  setTodos: (value: any) => void;
  todos: object[];
  inputData: string;
  setStatus: (value: 'all' | 'completed' | 'uncompleted') => void;
};

const Form = ({ updateInputData, todos, setTodos, inputData, setStatus }: FormParams) => {
  const inputTextHandler = (e: any) => {
    updateInputData(e.target.value);
  };
  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputData, completed: false, id: Math.random()}
    ]);
    updateInputData('');
  };
  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputData}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            onChange={statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
