import React, { useContext, useReducer, useRef, useState } from 'react'
import { todoReducer , initialState} from './reducers/todoReducer'
import Header from './components/Header/Header'
import './styles/global.scss'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const {theme} = useContext(ThemeContext)

  const todoTitle = useRef()
  const formRef = useRef()


  const handleSubmit = e=>{
    e.preventDefault()

    //all this bambojambo to make checked work with my custom checkbox
    const formData = new FormData(formRef.current);
    const data = {};
    let isDone = false
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // Check if the form contains an input with name 'checkbox'
    if (data.hasOwnProperty('checkbox')) {
      isDone = true
      // You can handle the checkbox value here
    } else {
      isDone = false
    }    

    if(todoTitle.current.value == ''){
      alert('todo cannot be empty')
    }else{
      dispatch({type:'ADD_TODO', payload : {
        text:todoTitle.current.value,
        done:isDone
      }})

      todoTitle.current.value = ''
    }

    

    //check if chekcbox is checked and reset its value
    const checkbox = formRef.current.querySelector('input[name="checkbox"]');
    if (checkbox) {
      checkbox.checked = false; // Uncheck the checkbox
    }
    
  }


  //toggle compeleted
  const handleToggle = (id,done)=>{
    dispatch({type:'SET_DONE',payload:{
      id : id,
      done: !done
    }})
  }

  //delete functionality
  const handleDelete = (id)=>{
    dispatch({type:'DELETE_TODO',payload:{
      id : id
    }})
  }

  //handle clear completed
  const handleClear = ()=>{
    dispatch({type:'CLEAR_COMPLETED'})
  }

  
  return (
        <div className={theme == 'light' ? 'App' : 'App dark'}>
          <div className='App__inner'>
          <Header />
          <AddTodo formRef={formRef} handleSubmit={handleSubmit} todoTitle={todoTitle} />
          <TodoList handleClear={handleClear} handleDelete={handleDelete} handleToggle={handleToggle} state={state}/>
          </div>
        </div>
  )
}