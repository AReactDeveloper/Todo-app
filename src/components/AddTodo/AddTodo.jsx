import React, { useReducer, useRef } from 'react'
import './addtodo.scss'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'

import { todoReducer, initialState } from '../../reducers/TodoReducer'; // Adjust path as needed


export default function AddTodo({handleToggle,handleSubmit,todoTitle,formRef,handleCheckBoxChane}) {
  

  return (
     <div className="addTodo">
      <form ref={formRef} onSubmit={handleSubmit} className='addTodo__form' >
        <input
          ref={todoTitle}
          className='addTodo__form__text'
          type="text"
          name="addtodo"
          id="addtodo"
          placeholder='Create a new todo ...'
        />
        <div className='addTodo__form__checkboxContainer'>
            <label class="checkbox" >
            <input  type="checkbox" name='checkbox'   />
            <span class="checkmark" ></span>
          </label>
        </div>
      </form>
    </div>
  )
}
