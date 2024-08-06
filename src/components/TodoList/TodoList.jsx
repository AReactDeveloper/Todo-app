import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({state,handleToggle,handleDelete}) {
  return (
    <div className='TodoList'>
      {state.map(todo=>{
        return <TodoItem handleDelete={handleDelete} id={todo.id} title={todo.text} done={todo.done} handleToggle={handleToggle} />
      })}
    </div>
  )
}
