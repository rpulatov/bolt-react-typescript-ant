import { combineReducers } from "redux"

import auth from "./auth/reducer"
import productTypes from './productTypes/reducer'

export const rootReducer = combineReducers({
  auth, productTypes
})
