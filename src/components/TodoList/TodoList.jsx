import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({state,handleToggle}) {

   // Function to move a task from one index to another
  const moveTask = (fromIndex, toIndex) => {
    // Use immutability-helper to create a new tasks array with the updated order
    const updatedTasks = update(tasks, {
      $splice: [
        // Remove the task from its original position
        [fromIndex, 1],
        // Insert the task at its new position
        [toIndex, 0, tasks[fromIndex]],
      ],
    });
    
  };


  return (
    <div className='TodoList'>
      {state.map((todo,index)=>{
        return <TodoItem 
        key={todo.id}
        title={todo.text}
         done={todo.done}
          id={todo.id} 
          handleToggle={handleToggle}
          index={index}
          moveTask={moveTask}
          />
      })}
    </div>
  )
}
