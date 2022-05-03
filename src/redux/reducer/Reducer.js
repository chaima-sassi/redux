import React from 'react'
import {ADD,DELETE,EDIT,CHECKED} from "../action/ActionTypes"

const initialState={
    todos:[

    { id : 1 ,
        description:'Learn React Js',
        complete:false
    },  
          {id:2,   
             description: 'learn Node Js',complete:false
          }
    ]
        
   }
function TodosReducer(state=initialState,action) {
    switch(action.type){
        case ADD:
            return{...state ,todos:[...state.todos , action.payload]}
        
        case DELETE:
            return {...state, todos:state.todos.filter(el=>el.id !== action.payload)}

        case EDIT:
            return {
                ...state, todos: state.todos.map((el) =>el.id == action.payload.id
                    ? {...el , description : action.payload.todos}
                    : el
                )
            }
        case CHECKED:
                return {...state,todos:state.todos.map(el=>el.id==action.payload? {...el,complete:!el.complete}:el)
    
            }
        default:
            return state
    }
}


    
  


export default TodosReducer