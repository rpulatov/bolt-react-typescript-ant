import axios from "axios"
import { loadState } from "../utils/localStorage"
import store from "../redux/store"
import { logoutAction } from "../redux/auth/actions"
import { notification } from "antd"

import { IApiError } from "./types"

export const baseURL =
  process.env.NODE_ENV === "production" ? "/api/v1" : "http://localhost:3001/api/v1"
// export const imgUrl =
//   process.env.NODE_ENV === 'production' ? '/app/uploads/' : 'https://economka.solutionfactory.ru/app/uploads/'

axios.defaults.baseURL = baseURL
axios.interceptors.request.use(
  function(config) {
    const ls = loadState()
    if (ls && ls.auth && ls.auth.token) {
      config.headers.common["Authorization"] = "bearer " + ls.auth.token
    }

    return config
  },
  function(error) {
    console.info("axios.interceptors.request", { error })
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => response,
  (error: IApiError) => {
    if (error && error.response && error.response.status === 401) {
      store.dispatch(logoutAction())
    }
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Ошибка при выполнении запроса"

    notification.error({ message })

    return Promise.reject(error)
  }
)

export default axios
