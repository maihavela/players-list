import { combineReducers } from "redux";
import { playersReducer } from "./playersReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  players: playersReducer,
  filters: searchReducer
});

export default rootReducer;