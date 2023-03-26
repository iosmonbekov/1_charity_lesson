const initialState = []

function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const todo = {
                id: Date.now(),
                text: action.payload.text,
            }
            return [...state, todo]
        case 'REMOVE_TODO': 
            return state.filter((todo) => todo.id !== action.payload.id)
        default:
            return state;
    }
}

export default TodoReducer
