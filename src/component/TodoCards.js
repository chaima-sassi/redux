import React from 'react'
import { useDispatch } from 'react-redux'
import{deletee,checked} from"../redux/action/Action"
import EditTodo from './EditTodo'




function TodoCards({todo}) {

  const dispatch=useDispatch()
  const supprimer=()=>{
    dispatch(deletee(todo.id))

  }

  
 
  return (
    <div className='d-flex justify-content-around mt-2'>
      
    

       <span >{todo.complete ?<h4 style={{textDecoration:"line-through" ,frontFamily:'arial'}}>{todo.description}</h4> : <h4>{todo.description} </h4>} </span> 
       <span className="card-item">
        <button   onClick={()=>supprimer()}>✘</button>
        
       <EditTodo todo={todo}  />
       
        <button className='px-2' onClick={()=>dispatch(checked(todo.id))}>{todo.complete?<span style={{color:"red"}}>🗹 </span>:<span style={{color:"green"}}>🗹 </span>}</button>

        </span>
        
    </div>
  )
}

export default TodoCards