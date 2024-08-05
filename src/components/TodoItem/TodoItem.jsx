
import React from 'react'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import './TodoItem.scss'

export default function TodoItem({title,done}) {
  return (
    <div className='TodoItem'>
        <CustomCheckmark done={done}  />
        <h3 className='TodoItem__title'>{title}</h3>
        <button>x</button>
    </div>
  )
}
