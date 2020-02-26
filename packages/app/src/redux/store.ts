import { createStore, applyMiddleware } from "redux"
import throttle from "lodash/throttle"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"

import { loadState, saveState } from "../utils/localStorage"
import { rootReducer } from "./combine"

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, loadState(), composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(
  throttle(
    () =>
      saveState({
        auth: store.getState().auth,
      }),
    1000
  )
)

export default store
