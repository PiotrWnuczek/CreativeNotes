import authReducer from "logic/authReducer";
import noteReducer from "logic/noteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
});

export default rootReducer;
