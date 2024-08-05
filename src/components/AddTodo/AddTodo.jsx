import React, { useReducer, useRef } from 'react'
import './addtodo.scss'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'

import { todoReducer, initialState } from '../../reducers/TodoReducer'; // Adjust path as needed


export default function AddTodo({handleSubmit,todoTitle,checkboxref}) {
  

  return (
     <div className="addTodo">
      <form onSubmit={handleSubmit} className='addTodo__form' >
        <input
          ref={todoTitle}
          className='addTodo__form__text'
          type="text"
          name="addtodo"
          id="addtodo"
          placeholder='Create a new todo ...'
        />
        <div className='addTodo__form__checkboxContainer'>
          <CustomCheckmark checkboxRef={checkboxref} />
        </div>
      </form>
    </div>
  )
}
