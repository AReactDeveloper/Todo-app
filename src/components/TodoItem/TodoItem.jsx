
import React, { useRef } from 'react';
import CustomCheckmark from '../CustomCheckmark/CustomCheckmark'
import crossIcon from './../../assets/images/icon-cross.svg'
import './TodoItem.scss'

//reactdnd
import { useDrag, useDrop } from 'react-dnd';

// Define the item type for drag-and-drop operations
const ItemType = 'TASK';

export default function TodoItem({title,done,id,handleToggle}) {

  // Create a ref for the DOM element
  const ref = useRef(null);

  // Configure the drop target for this component
  const [, drop] = useDrop({
    accept: ItemType, // Accept items of type 'TASK'
    hover(item) {
      // When another item is hovered over this target
      if (item.id !== id) {
        // If the item being dragged is not currently at this index, move it
        moveTask(item.id, id);
        // Update the dragged item's index to the new position
        item.id = id;
      }
    },
  });

  // Configure the drag source for this component
  const [{ isDragging }, drag] = useDrag({
    type: ItemType, // Define the type of item being dragged
    item: { id, index }, // Data to be passed during the drag operation
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Collect the drag state
    }),
  });

  // Combine the drag and drop refs
  drag(drop(ref));

  return (
    <div className={!done ? 'TodoItem' : 'TodoItem done' }>
        <CustomCheckmark done={done} id={id}   handleToggle={handleToggle} />
        <h3 className='TodoItem__title'>{title}</h3>
        <button>
          <img src={crossIcon} alt="" />
        </button>
    </div>
  )
}
