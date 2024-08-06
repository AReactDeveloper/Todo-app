import React, { useContext, useEffect, useState } from 'react'
import './customcheckmark.scss'
import { ThemeContext } from '../../context/ThemeContext';
//reusable custom checkmark to be placed in the form and on the list
export default function CustomCheckmark({done,handleToggle,id}) {

    const {theme} = useContext(ThemeContext)

  const [isChecked,setIsChecked] = useState(done)

  useEffect(() => {
    setIsChecked(done);
  }, [done]);

  const handleChange =  ()=>{
    setIsChecked(!isChecked)
    handleToggle(id,done);
  }

  return (
        <label className={theme == 'light' ? "checkbox" : "checkbox dark"}>
            <input onChange={()=>handleChange(id)} type="checkbox" name='checkbox' checked={isChecked}  />
            <span className="checkmark" ></span>
        </label>
)
}
