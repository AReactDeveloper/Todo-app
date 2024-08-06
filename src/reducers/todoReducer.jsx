import { ACTIONS } from '../utils/constants';

export const initialState = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          done: action.payload.done,
        },
      ];
    }
    case 'SET_DONE': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, done: action.payload.done }
          : item
      );
    }
    case 'DELETE_TODO': {
      return state.filter(todo => todo.id != action.payload.id)
    }
    case 'CLEAR_COMPLETED': {
      return state.filter(todo => !todo.done)
    }
    
    default:
      return state;
  }
};

