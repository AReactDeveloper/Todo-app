import React, { useContext } from 'react'
import './footer.scss'
import { ThemeContext } from '../../context/ThemeContext'

export default function Footer({handleFilterChange,filter}) {

    const {theme,toggleTheme} = useContext(ThemeContext)


  return (
    <>
    <footer className={theme == 'light' ? 'footer' : 'footer dark'} >
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
    <p className='drag-msg'>drag and drop to reorder list</p>
    </>
  )
}
