import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // don't mutate/manupulate state.
      // return state.concat([ action.payload.data ]); // don't use .push(). concat() will create a new instance of state
      return [ action.payload.data, ...state]; // roughly equivalent to the above - creates a new array and inserts the old array inside it & flattens it.
    default:
      return state;
  }

  return state;
}
