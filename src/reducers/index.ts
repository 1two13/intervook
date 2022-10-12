import { combineReducers } from "redux";
import auth from "./authReducers";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
