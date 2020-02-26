import { Dispatch } from "redux"

import {
  fetchProductTypes,
  addProductTypes,
  editProductTypes,
  deleteProductTypes,
} from "../../api/productTypes"

import {
  IProductTypeAction,
  PRODUCT_TYPE_FAILURE,
  PRODUCT_TYPE_REQUEST,
  PRODUCT_TYPE_SUCCESS,
  PRODUCT_TYPE_ADD,
  PRODUCT_TYPE_DELETE,
  PRODUCT_TYPE_EDIT,
} from "./types"

export const fetchProductTypesAction = () => (dispatch: Dispatch) => {
  dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_REQUEST })

  fetchProductTypes()
    .then(response =>
      dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_SUCCESS, payload: response.data })
    )
    .catch(() => dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_FAILURE }))
}

export const addProductTypesAction = (name: string) => (dispatch: Dispatch) => {
  dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_REQUEST })

  addProductTypes(name)
    .then(response =>
      dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_ADD, payload: response.data })
    )
    .catch(() => dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_FAILURE }))
}

export const editProductTypesAction = (id: string, name: string) => (dispatch: Dispatch) => {
  dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_REQUEST })

  editProductTypes(id, name)
    .then(response =>
      dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_EDIT, payload: response.data })
    )
    .catch(() => dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_FAILURE }))
}

export const deleteProductTypesAction = (id: string) => (dispatch: Dispatch) => {
  dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_REQUEST })

  deleteProductTypes(id)
    .then(response =>
      dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_DELETE, payload: { _id: id } })
    )
    .catch(() => dispatch<IProductTypeAction>({ type: PRODUCT_TYPE_FAILURE }))
}