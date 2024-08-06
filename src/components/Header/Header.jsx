import React, { useContext } from 'react'
import './Header.scss'
import moonIcon from './../../assets/images/icon-moon.svg'
import sunIcon from './../../assets/images/icon-sun.svg'
import { ThemeContext } from '../../context/ThemeContext'


export default function Header() {
  
  const {theme,toggleTheme} = useContext(ThemeContext)

  const handleThemeChange = ()=>{
    toggleTheme()
  }

  const imgsrc = theme == 'light' ? moonIcon : sunIcon


  return (
    <header className='header'>
      <div className="header__inner">
        <h1>TODO</h1>
        <button onClick={handleThemeChange}>
          <img src={imgsrc} alt="" />
        </button>
      </div>
    </header>
  )
}
