import { useSelector, useDispatch } from "./_libs/react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/actions";

function App() {
  const todos = useSelector((state) => state)
  const dispatch = useDispatch()
  
  return (
    <div className="container p-3 w-50">
      <TodoForm onAddTodo={(text) => dispatch(addTodo(text))} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
