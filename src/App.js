import React, { useReducer, useRef } from 'react'
import { todoReducer , initialState} from './reducers/TodoReducer'
import Header from './components/Header/Header'
import './styles/global.scss'
import TodoList from './components/TodoList/TodoList'

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const todoTitle = useRef()

  const handleSubmit = e=>{
    console.log(todoTitle.current.value)
    dispatch({type:'ADD_TODO', payload : {
      text:todoTitle.current.value,
    }})
    e.preventDefault()
    todoTitle.current.value = ''
  }

  console.log(state)

  return (
    <div className='App'>
        <div className='App__inner'>
          <Header handleSubmit={handleSubmit} todoTitle={todoTitle} />
          <TodoList state={state}/>
        </div>
    </div>
  )
}
