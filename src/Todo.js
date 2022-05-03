import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {add ,deletee,checked } from './redux/action/Action'
const object = ({state , add , deletee,checked}) => {
   
  return (
    <div>
       <button onClick={()=>add()}>add</button>

       <button onClick={()=>deletee()}>delete</button>
    </div>
  )
}
const mapStateToProps =(state)=>{
    return {
        state : state.object
    }
}

const mapDispatchToProps=(dispatch)=>{
      return {
          add : ()=>dispatch(add()) ,
          deleteee :()=>dispatch(deletee())
      }
}

export default connect( mapStateToProps ,mapDispatchToProps ) (object)