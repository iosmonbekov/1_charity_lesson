// import { applyMiddleware, createStore } from "redux";
// import { logger } from "./middlewares";
// import TodoReducer from "./TodoReducer";

// const store = createStore(TodoReducer, applyMiddleware(logger))

// export default store // .getState() .subscribe() .dispatch()

export const createStore = (reducer) => {
    let state = reducer(undefined, {}) // []
    const subscriptions = []

    return {
        dispatch(action) {
            state = reducer(state, action)
            subscriptions.forEach((fn) => fn())
        },
        subscribe(fn) {
            subscriptions.push(fn)
        },
        getState() {
            return state
        },
    }
}

// Must have:
// Render mechanizm of react
// Closure (stateful functions)
// React.context


