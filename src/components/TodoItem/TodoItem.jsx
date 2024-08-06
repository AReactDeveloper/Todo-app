
import React from 'react'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import './TodoItem.scss'

export default function TodoItem({title,done,handleToggle,id}) {
  return (
    <div className='TodoItem'>
        <CustomCheckmark handleToggle={handleToggle} done={done} id={id}  />
        <h3 className='TodoItem__title'>{title}</h3>
        <button>x</button>
    </div>
  )
}
