import { AxiosHttpClient } from '@/infra/axios-http-client'
import { HttpClient } from '@/infra/protocols/axios-http-client-protocol'

export function makeAxiosHttpClient<T>(): HttpClient<T> {
  return new AxiosHttpClient<T>()
}
