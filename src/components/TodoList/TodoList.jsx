import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({state,handleToggle}) {
  return (
    <div className='TodoList'>
      {state.map(todo=>{
        return <TodoItem 
        key={todo.id}
        title={todo.text}
         done={todo.done}
          id={todo.id} 
          handleToggle={handleToggle}/>
      })}
    </div>
  )
}
