import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
   user: userReducer,
   //เพิ่ม store
});

export default rootReducer;
