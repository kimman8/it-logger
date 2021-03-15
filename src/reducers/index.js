import { CombineReducers } from "redux";
import logReducer from "./logReducer";

export default CombineReducers({
  log: logReducer,
});
