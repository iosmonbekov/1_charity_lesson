import { useState } from "react"

function TodoForm({ onAddTodo }) {
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAddTodo(value)
        setValue('')
    }

    return <form className="d-flex mb-3" onSubmit={onSubmit}>
        <input className="form-control" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="btn btn-primary mx-2">Add</button>
    </form>
}

export default TodoForm