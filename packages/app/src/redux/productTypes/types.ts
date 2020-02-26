export const PRODUCT_TYPE_REQUEST = "PRODUCT_TYPE_REQUEST"
export const PRODUCT_TYPE_FAILURE = "PRODUCT_TYPE_FAILURE"
export const PRODUCT_TYPE_SUCCESS = "PRODUCT_TYPE_SUCCESS"

export const PRODUCT_TYPE_ADD = "PRODUCT_TYPE_ADD"
export const PRODUCT_TYPE_EDIT = "PRODUCT_TYPE_EDIT"
export const PRODUCT_TYPE_DELETE = "PRODUCT_TYPE_DELETE"

export interface IProductType {
  _id: string
  name: string
}

export interface IProductTypeState {
  loading: boolean
  data: {
    [key: string]: IProductType
  }
  order: Array<string>
}

export interface IProductTypeAction {
  type: string
  payload?: IProductType[] | IProductType | { _id: string, name?: string }
}
