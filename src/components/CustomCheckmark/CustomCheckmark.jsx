import React, { useReducer, useState } from 'react'
import './customcheckmark.scss'
import { todoReducer , initialState} from '../../reducers/TodoReducer'
//reusable custom checkmark to be placed in the form and on the list
export default function CustomCheckmark({done,id,handleToggle}) {

    const [state, dispatch] = useReducer(todoReducer, initialState);


  const [isChecked, setIsChecked] = useState(done)

  React.useEffect(()=>{
    setIsChecked(done)
  },[done])

  const handleChange = e=>{
    setIsChecked(!isChecked)
    handleToggle(id,done)
  }

  



  return (
        <label class="checkbox" >
            <input onChange={handleChange}  type="checkbox" name='checkbox' checked={isChecked}  />
            <span class="checkmark" ></span>
        </label>
)
}
