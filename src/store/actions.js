export const addTodo = (text) =>  {
    return {type: 'ADD_TODO', payload: { text } }
}

export const removeTodo = (id) => {
    return {type: 'REMOVE_TODO', payload: { id }}
}
