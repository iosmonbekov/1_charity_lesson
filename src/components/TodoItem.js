import { useDispatch } from "../_libs/react-redux"
import { removeTodo } from "../store/actions"

function TodoItem({ todo }) {
    const dispatch = useDispatch()

    return <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{ todo.text }</span>
        <button className="btn btn-danger" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </li>
}

export default TodoItem
