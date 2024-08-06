import React, { useContext } from 'react'
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import './TodoItem.scss'
import CrossIcon from '../../assets/images/icon-cross.svg'
import { ThemeContext } from '../../context/ThemeContext'

export default function TodoItem({title,done,handleToggle,id,handleDelete}) {
  
      const {theme} = useContext(ThemeContext)



  return (
    <div className={theme == 'light' ? 'TodoItem' : 'TodoItem dark'}>
        <CustomCheckmark handleToggle={handleToggle} done={done} id={id}  />
        <h3 className={done == true ? 'TodoItem__title item-done' : 'TodoItem__title'}>{title}</h3>
        <button onClick={()=>handleDelete(id)}><img src={CrossIcon} alt="" /></button>
    </div>
  )
}
