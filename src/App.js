
    import React, { useState } from 'react';
    import './App.css';
import AddTodo from './component/AddTodo';
   import{useSelector}from"react-redux"
   import TodoList from './component/TodoList';
import TodoCard from './component/TodoCards';
    
    
    function App() {
      const todoss=useSelector(state=>state.todos)
    
      const[tdo,setTdo]=useState("")
 
   
      return (
        <div>
         <AddTodo tdo={tdo} setTdo={setTdo}/>
         <TodoList todoss={todoss}/>
        
        </div>
      );
    }
    
    export default App;
