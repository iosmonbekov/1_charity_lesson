import TodoItem from "./TodoItem"

function TodoList({ todos }) {
    return <ul className="list-group">
        {
            todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)
        }
    </ul>
}


export default TodoList
