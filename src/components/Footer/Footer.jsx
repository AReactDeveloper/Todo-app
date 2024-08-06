import React from 'react'
import './footer.scss'

export default function Footer({handleFilterChange,filter}) {
  return (
    <footer className='footer' >
        <button
            className={filter == 'all' ? 'active' : ''}
            onClick={()=>handleFilterChange('all')}
        >All</button>
        <button 
            className={filter == 'active' ? 'active' : ''}
            onClick={()=>handleFilterChange('active')}
        >Active</button>
        <button 
            className={filter == 'completed' ? 'active' : ''}
            onClick={()=>handleFilterChange('completed')}
        >Completed</button>
    </footer>
  )
}
