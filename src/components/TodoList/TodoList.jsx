import React, { useContext, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';
import Footer from "../Footer/Footer";
import { ThemeContext } from '../../context/ThemeContext';
import { Reorder } from 'framer-motion';


export default function TodoList({ state, handleToggle, handleDelete, handleClear, dispatch }) {

    const { theme } = useContext(ThemeContext);
    const [filter, setFilter] = useState('all');
    const [filteredState,SetfilteredState] = useState(state)

    
    React.useEffect(()=>{
      const newState = state.filter(todo => {
        switch (filter) {
            case 'all':
                return true;
            case 'active':
                return !todo.done;
            case 'completed':
                return todo.done;
            default:
                return true;
        }
    });
    SetfilteredState(newState)
  },[filter,state])
  

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const handleReorder = (newOrder) => {
        SetfilteredState(newOrder)
    };

    

    const element = filteredState.length === 0 ? (
        <p className='notodos'>No todos available.</p>
    ) : (
        <Reorder.Group axis="y" values={filteredState} onReorder={handleReorder}>
            {filteredState.map(todo => (
                <Reorder.Item key={todo.id} value={todo}>
                    <TodoItem
                        handleDelete={handleDelete}
                        id={todo.id}
                        title={todo.text}
                        done={todo.done}
                        handleToggle={handleToggle}
                    />
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );

    return (
        <>
            <div className={theme === 'light' ? 'TodoList' : 'TodoList dark'}>
                {element}
                <div className="todoListFooter">
                    <button>{state.length} items Left</button>
                    <button onClick={handleClear}>Clear Completed</button>
                </div>
            </div>
            <Footer handleFilterChange={handleFilterChange} filter={filter} />
        </>
    );
}
