import { createStore } from "../_libs/redux";
// import { logger } from "./middlewares";
import TodoReducer from "./TodoReducer";

const store = createStore(TodoReducer)

export default store
