import React from 'react'
import TodoCards from './TodoCards'

function TodoList( {todoss}) {

  return (
    <div>

{
  todoss.map(el=><TodoCards todo={el} />)
}


    </div>
  )
}

export default TodoList