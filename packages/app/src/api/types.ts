import { AxiosError, AxiosResponse } from "axios"

export interface IApiError extends AxiosError {
  message: string
}

export interface IApiResponse<T> extends AxiosResponse<T> {}
