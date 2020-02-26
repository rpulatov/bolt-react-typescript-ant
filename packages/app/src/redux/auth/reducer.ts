import {
  IAuthStateLoadable,
  IAuthAction,
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
} from "./types"

const initialState: IAuthStateLoadable = {
  token: "",
  username: "",
  loading: false,
}

export default (state = initialState, action: IAuthAction): IAuthStateLoadable => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      if (action.payload) {
        return { ...action.payload, loading: false }
      } else {
        return { ...state, loading: false }
      }
    case LOGIN_FAILURE:
      return { ...state, loading: false }

    case LOGOUT:
      return { token: "", username: "", loading: false }

    default:
      return state
  }
}
