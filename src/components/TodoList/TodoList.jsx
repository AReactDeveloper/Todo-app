import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';
import Footer from "../Footer/Footer";

export default function TodoList({ state, handleToggle, handleDelete , handleClear }) {

  const [filter,setFilter] = useState('completed')

  const filteredState = state.filter(todo=>{
      switch(filter){
        case 'all' : {
          return true
        }
        case 'active':{
          return !todo.done
        }
        case 'completed':{
          return todo.done
        }
      }
  })


  // Conditionally render based how many todos are there
  const element = state.length === 0 ? (
    <p className='notodos'>No todos available.</p> 
  ) : (
      <>
      {filteredState.map(todo => (
        <TodoItem
          key={todo.id}
          handleDelete={handleDelete}
          id={todo.id}
          title={todo.text}
          done={todo.done}
          handleToggle={handleToggle}
        />
      ))}
      </>
  );

  //change filter base on user input
  const handleFilterChange = (filter)=>{
    setFilter(filter)
  }

  //footer needs to be here in order to not affect the main state managed by reducer
  //fragment compoenent solves the issue by allowing us to have in the same componenet
  return (
    <>
  <div className='TodoList'>
    <>{element}</>
    <div className="todoListFooter">
      <button>{state.length} items Left</button>
      <button onClick={handleClear}>Clear Completed</button>
    </div>
  </div>
    <Footer handleFilterChange={handleFilterChange} />
  </>
  )
}
