import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({state,handleToggle}) {
  return (
    <div>
      {state.map(todo=>{
        return <TodoItem id={todo.id} title={todo.text} done={todo.done} handleToggle={handleToggle} />
      })}
    </div>
  )
}
