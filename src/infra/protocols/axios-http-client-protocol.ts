export interface HttpClient<T = any> {
  request: (data: HttpClient.Request) => Promise<HttpClient.Response<T>>
}

export namespace HttpClient {
  export type Request = {
    body?: any
    headers?: any
    method: HttpClient.Method
    params?: Record<string, string | number | boolean>
    signal?: AbortSignal
    url: string
  }

  export type Response<T = any> = {
    body?: T
    statusCode: HttpClient.StatusCode
  }

  export type Method = 'get' | 'post' | 'put' | 'delete'

  export enum StatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500
  }
}
