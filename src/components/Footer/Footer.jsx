import React from 'react'
import './footer.scss'

export default function Footer({handleFilterChange}) {
  return (
    <footer className='footer' >
      <button onClick={()=>handleFilterChange('all')}>All</button>
      <button onClick={()=>handleFilterChange('active')}>Active</button>
      <button onClick={()=>handleFilterChange('completed')}>Completed</button>
    </footer>
  )
}
