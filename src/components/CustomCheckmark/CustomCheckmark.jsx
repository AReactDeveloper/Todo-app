import React from 'react'
import './customcheckmark.scss'
//reusable custom checkmark to be placed in the form and on the list
export default function CustomCheckmark({done,checkboxref}) {
  return (
        <label class="checkbox">
            <input type="checkbox" name='checkbox' checked={done}  />
            <span class="checkmark" ></span>
        </label>
)
}
