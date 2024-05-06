import { HttpClient } from '@/infra/protocols/axios-http-client-protocol'
import axios, { AxiosError, AxiosResponse } from 'axios'

export class AxiosHttpClient<T> implements HttpClient<T> {
  async request(data: HttpClient.Request): Promise<HttpClient.Response<T>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
        signal: data.signal
      })
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        axiosResponse = error.response
      } else {
        return {
          statusCode: HttpClient.StatusCode.serverError,
          body: {} as T
        }
      }
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
