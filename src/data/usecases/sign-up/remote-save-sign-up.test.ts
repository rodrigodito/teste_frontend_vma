import { HttpClientSpy } from '@/data/test/mockHttp'
import { SignUpDto, SignUpResponse } from '@/domain/dto/save-sign-up-dto'
import { NotFoundError } from '@/errors/notFoundError'
import { UnexpectedError } from '@/errors/unexpectedError'
import { HttpClient } from '@/infra/protocols/axios-http-client-protocol'

import { RemoteSaveSignUp } from './remote-save-sign-up'

const dataFormMocked: SignUpDto = {
  email: 'teste@gmail.com',
  fullName: 'Rodrigo Benedito de Carvalho',
  password: '12345',
  mobile: '12345',
  policyTerms: true
}

function makeSut(url: string = 'https://www.fake-url.com.br') {
  const httpCliente = new HttpClientSpy<SignUpResponse>()
  const sut = new RemoteSaveSignUp(url, httpCliente)
  return { httpCliente, sut }
}

describe('RemoteSaveSignUp', () => {
  test('Should call HttpCliente with correct url', async () => {
    const fakeUrl = 'https://www.google.com'
    const { httpCliente, sut } = makeSut(fakeUrl)
    await sut.save(dataFormMocked)
    expect(httpCliente.url).toBe(fakeUrl)
  })

  test('Should response data correctly if HttpCliente return 200', async () => {
    const { httpCliente, sut } = makeSut()
    const mockResponse = {
      message: 'ok'
    }
    httpCliente.response = {
      statusCode: HttpClient.StatusCode.ok,
      body: mockResponse
    }
    const responseApi = await sut.save(dataFormMocked)
    expect(responseApi).toEqual(mockResponse)
  })

  test('Should throw Error if HttpCliente return 404', async () => {
    const { httpCliente, sut } = makeSut()
    httpCliente.response = {
      statusCode: HttpClient.StatusCode.notFound
    }
    const promiseSut = sut.save(dataFormMocked)
    await expect(promiseSut).rejects.toThrow(new NotFoundError())
  })

  test('Should throw Error if HttpCliente return 400', async () => {
    const { httpCliente, sut } = makeSut()
    httpCliente.response = {
      statusCode: HttpClient.StatusCode.badRequest
    }
    const promiseSut = sut.save(dataFormMocked)
    await expect(promiseSut).rejects.toThrow(new UnexpectedError())
  })
})
