import {
  IProductTypeState,
  IProductTypeAction,
  PRODUCT_TYPE_FAILURE,
  PRODUCT_TYPE_REQUEST,
  PRODUCT_TYPE_SUCCESS,
  PRODUCT_TYPE_ADD,
  PRODUCT_TYPE_DELETE,
  PRODUCT_TYPE_EDIT,
} from "./types"

const initialState: IProductTypeState = {
  loading: false,
  data: {},
  order: [],
}

export default (state = initialState, action: IProductTypeAction): IProductTypeState => {
  switch (action.type) {
    case PRODUCT_TYPE_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_TYPE_SUCCESS:
      if (Array.isArray(action.payload)) {
        const newState = Object.assign({}, initialState)
        newState.loading = false
        action.payload.forEach(item => {
          newState.data[item._id] = item
        })
        newState.order = Object.keys(newState.data)
        return newState
      } else {
        return { ...state, loading: false }
      }
    case PRODUCT_TYPE_FAILURE:
      return { ...state, loading: false }

    case PRODUCT_TYPE_ADD:
      if (action.payload && !Array.isArray(action.payload)) {
        const newState = Object.assign({}, state)
        newState.loading = false
        newState.data[action.payload._id] = {
          _id: action.payload._id,
          name: action.payload.name || "",
        }
        newState.order.push(action.payload._id)
        return newState
      } else {
        return { ...state, loading: false }
      }

    case PRODUCT_TYPE_EDIT:
      if (action.payload && !Array.isArray(action.payload)) {
        const newState = Object.assign({}, state)
        newState.loading = false
        newState.data[action.payload._id] = {
          _id: action.payload._id,
          name: action.payload.name || "",
        }
        return newState
      } else {
        return { ...state, loading: false }
      }

    case PRODUCT_TYPE_DELETE:
      if (action.payload && !Array.isArray(action.payload)) {
        const { _id } = action.payload
        const newState = Object.assign({}, state)
        newState.loading = false
        delete newState.data[_id]
        newState.order = newState.order.filter(id => id !== _id)
        return newState
      } else {
        return { ...state, loading: false }
      }
    default:
      return state
  }
}
