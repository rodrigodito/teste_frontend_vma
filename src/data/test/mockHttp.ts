import { HttpClient } from '@/infra/protocols/axios-http-client-protocol'

export class HttpClientSpy<R> implements HttpClient<R> {
  url: string | undefined
  response: HttpClient.Response<R> = {
    statusCode: HttpClient.StatusCode.ok
  }

  async request(data: HttpClient.Request): Promise<HttpClient.Response<R>> {
    this.url = data.url
    return this.response
  }
}
