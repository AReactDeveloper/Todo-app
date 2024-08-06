
import React from 'react'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import './TodoItem.scss'

export default function TodoItem({title,done,id,handleToggle}) {
  return (
    <div className={!done ? 'TodoItem' : 'TodoItem done' }>
        <CustomCheckmark done={done} id={id}   handleToggle={handleToggle} />
        <h3 className='TodoItem__title'>{title}</h3>
        <button>x</button>
    </div>
  )
}
