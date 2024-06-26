import { SignUpDto, SignUpResponse } from '@/domain/dto/save-sign-up-dto'
import { SaveSignUp } from '@/domain/save-sign-up'
import { NotFoundError } from '@/errors/notFoundError'
import { UnexpectedError } from '@/errors/unexpectedError'
import { AxiosHttpClient } from '@/infra/axios-http-client'
import { HttpClient } from '@/infra/protocols/axios-http-client-protocol'

export class RemoteSaveSignUp implements SaveSignUp {
  constructor(
    private readonly url: string,
    private readonly httpCliente: AxiosHttpClient<SignUpResponse>
  ) {}

  async save(formData: SignUpDto): Promise<SignUpResponse> {
    const httpResponse = await this.httpCliente.request({
      method: 'post',
      url: this.url,
      params: formData
    })

    switch (httpResponse.statusCode) {
      case HttpClient.StatusCode.ok:
        return httpResponse.body!
      case HttpClient.StatusCode.notFound:
        throw new NotFoundError()
      default:
        throw new UnexpectedError()
    }
  }
}
