import React from 'react'
import {add} from"../redux/action/Action"
import{useDispatch} from"react-redux"

function AddTodo({setTdo,tdo}) {
    const dispatch=useDispatch()


    let newTodo ={
      description : tdo,
      id: Math.random()}
    const addTd=()=>{
        dispatch(add(newTodo))
    }
        
  return (
    <div className='all'>
 <h3 className='center'>To do List</h3>
 <br/>
 <div className='Add'>
<input type="text" placeholder="Add to do"  onChange={e=>setTdo(e.target.value)}/>
<button type="button" class="btn btn-success" onClick={()=>addTd()}> Add </button>
</div>
    </div>
  )
}


export default AddTodo