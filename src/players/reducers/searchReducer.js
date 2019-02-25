import { APPLY_FILTER } from '../actions/searchActions';

export function searchReducer(state = {}, action) {
  switch (action.type) {
    case APPLY_FILTER:
      return { ...action.payload };

    default:
      return state;
  }
}