import client from "./client"

import { IApiResponse } from "api/types"
import { IProductType } from 'redux/productTypes/types'


export function fetchProductTypes(): Promise<IApiResponse<[IProductType]>> {
  return client.get("/product-types")
}

export function addProductTypes(name: string): Promise<IApiResponse<IProductType>> {
  return client.post("/product-types", { name })
}

export function editProductTypes(id: string, name: string): Promise<IApiResponse<IProductType>> {
  return client.put(`/product-types/${id}`, { name })
}

export function deleteProductTypes(id: string): Promise<null> {
  return client.delete(`/product-types/${id}`)
}
