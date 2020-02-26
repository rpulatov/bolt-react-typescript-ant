import { Dispatch } from "redux"

import { login } from "../../api/auth"
import { IAuthAction, IAuthState, LOGIN_SUCCESS, LOGIN, LOGIN_FAILURE, LOGOUT } from "./types"
import {  AxiosResponse } from "axios"

type LoginResponse = {
  firstName: string
  lastName: string
  token: string
}

type LoginError = {
  message: string
}

export const loginAction = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch({ type: LOGIN })
  login(email, password)
    .then((res: AxiosResponse<LoginResponse>) => {
      const { firstName, lastName, token } = res.data
      dispatch(loginSuccessAction({ token, username: firstName + " " + lastName }))
    })
    .catch(() => dispatch<IAuthAction>({ type: LOGIN_FAILURE }))
}

const loginSuccessAction = (payload: IAuthState): IAuthAction => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const logoutAction = () => ({
  type: LOGOUT,
})
