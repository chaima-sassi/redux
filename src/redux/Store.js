
import { createStore } from "redux"
import TodosReducer  from "./reducer/Reducer"

export const store = createStore( 
    TodosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
