// 액션을 만드는 함수(액션 생성자)
import * as types from "./authTypes";

export const login = (id: number, username: string) => ({
  type: types.LOGIN,
  payload: {
    id,
    username,
  },
});

export const logout = () => ({
  type: types.LOGOUT,
});

export type AuthenticateAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>;
