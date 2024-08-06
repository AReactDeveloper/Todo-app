//rewrite reducer
export const initialState = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: true }
];

export const todoReducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        done: action.payload.done
      }];
    }
    case 'SET_DONE': {
  // Iterate over the state array and update the 'done' status of the matching item
  return state.map(item => {
    if (item.id === action.payload.id) {
      // Return a new object with the updated 'done' status
      return {
        ...item,
        done: !action.payload.done // Toggle the done status
      };
    }
    // Return the item unchanged if it doesn't match the id
    return item;
  });
}

    default: {
      return state
    }
  }
}