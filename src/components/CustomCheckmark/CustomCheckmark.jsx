import React, { useEffect, useState } from 'react'
import './customcheckmark.scss'
//reusable custom checkmark to be placed in the form and on the list
export default function CustomCheckmark({done,handleToggle,id}) {

  const [isChecked,setIsChecked] = useState(done)

  useEffect(() => {
    setIsChecked(done);
  }, [done]);

  const handleChange =  ()=>{
    setIsChecked(!isChecked)
    handleToggle(id,done);
  }

  return (
        <label className="checkbox">
            <input onChange={()=>handleChange(id)} type="checkbox" name='checkbox' checked={isChecked}  />
            <span className="checkmark" ></span>
        </label>
)
}
