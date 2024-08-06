import React from 'react'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import './TodoItem.scss'
import CrossIcon from '../../assets/images/icon-cross.svg'

export default function TodoItem({title,done,handleToggle,id,handleDelete}) {
  return (
    <div className={done ? 'TodoItem item-done' : 'TodoItem'}>
        <CustomCheckmark handleToggle={handleToggle} done={done} id={id}  />
        <h3 className='TodoItem__title'>{title}</h3>
        <button onClick={()=>handleDelete(id)}><img src={CrossIcon} alt="" /></button>
    </div>
  )
}
