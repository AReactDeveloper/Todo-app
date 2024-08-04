import React from 'react'
import AddTodo from './../AddTodo/AddTodo'
import './Header.scss'
import sunIcon from './../../assets/images/icon-sun.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__inner">
        <h1>TODO</h1>
        <button>
          <img src={sunIcon} alt="" />
        </button>
      </div>
      <AddTodo />
    </header>
  )
}
