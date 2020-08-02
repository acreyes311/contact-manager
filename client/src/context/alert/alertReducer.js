import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    // return array that gets set
    case SET_ALERT:
      return [...state, action.payload];

    // Filter out the correct alert by id
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
  }
};
