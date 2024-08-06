import React, { useContext, useReducer, useRef } from 'react'
import './addtodo.scss'
import { ThemeContext } from '../../context/ThemeContext'

export default function AddTodo({handleSubmit,todoTitle,formRef}) {
  
    const {theme} = useContext(ThemeContext)


  return (
     <div className={theme == 'light' ? "addTodo" : "addTodo dark"}>
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
          <label className={theme == 'light' ? "checkbox" : "checkbox dark"}>
            <input type="checkbox" name='checkbox'   />
            <span className="checkmark" ></span>
        </label>        
        </div>
      </form>
    </div>
  )
}
