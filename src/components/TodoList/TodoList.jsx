import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({state}) {
  return (
    <div>
      {state.map(todo=>{
        return <TodoItem title={todo.text} done={todo.done} />
      })}
    </div>
  )
}
