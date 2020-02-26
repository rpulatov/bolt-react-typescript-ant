export const LOGIN = "LOGIN"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGOUT = "LOGOUT"

export interface IAuthState {
  token: string
  username: string  
}

export interface IAuthStateLoadable extends IAuthState {
  loading: boolean
}

export interface IAuthAction {
  type: string,
  payload?: IAuthState
}
