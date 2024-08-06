import React, { useReducer, useRef, useState } from 'react'
import { todoReducer , initialState} from './reducers/TodoReducer'
import Header from './components/Header/Header'
import './styles/global.scss'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import { ACTIONS } from './utils/constants'

//dnd 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const todoTitle = useRef()
  const formRef = useRef()

  const [isChecked,setIsChecked] = useState(true)

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
    
    dispatch({type:ACTIONS.ADD_TODO, payload : {
      text:todoTitle.current.value,
      done:isDone
    }})
    todoTitle.current.value = ''
    //check if chekcbox is checked and reset its value
    const checkbox = formRef.current.querySelector('input[name="checkbox"]');
    if (checkbox) {
      checkbox.checked = false; // Uncheck the checkbox
    }
    
  }

  const handleToggle = (id, done) => {
    console.log(id,done)
    dispatch({ type: ACTIONS.SET_TODO, payload: { id:id, done:done } });
  };



 

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
          <div className='App__inner'>
            <Header />
            <AddTodo  formRef={formRef} handleSubmit={handleSubmit} todoTitle={todoTitle} />
            <TodoList state={state} handleToggle={handleToggle}/>
          </div>
      </div>
    </DndProvider>

  )
}
