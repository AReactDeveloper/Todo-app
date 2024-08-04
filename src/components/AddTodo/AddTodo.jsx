import React from 'react'
import "./addtodo.scss"
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'

export default function AddTodo() {
  return (
    <div className="addTodo">
      <form className='addTodo__form'>
        <input className='addTodo__form__text' type="text" name="addtodo" id="addtodo" placeholder='Create a new todo ...' />
        <div className='addTodo__form__checkboxContainer'>
          <CustomCheckmark />
          </div>
      </form>
    </div>
  )
}
