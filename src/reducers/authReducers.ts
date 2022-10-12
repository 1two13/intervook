import * as types from "../actions/authTypes";
import { AuthenticateAction } from "../actions/authActions";

// 초기 상태 정의
const initialState = {
  id: 0,
  username: "",
  isLogin: false,
};

function authReducers(state = initialState, action: AuthenticateAction) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...action.payload,
        isLogin: true,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default authReducers;

export type State = ReturnType<typeof authReducers>;
