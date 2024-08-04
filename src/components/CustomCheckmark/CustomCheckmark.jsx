import React from 'react'
import './customcheckmark.scss'
//reusable custom checkmark to be placed in the form and on the list
export default function CustomCheckmark() {
  return (
        <label class="checkbox">
            <input type="checkbox"  />
            <span class="checkmark"></span>
        </label>
)
}
