import { RemoteSaveSignUp } from '@/data/usecases/sign-up/remote-save-sign-up'

import { makeAxiosHttpClient } from './axios-http-client-factory'

export function makeSaveSignUpFactory(): RemoteSaveSignUp {
  return new RemoteSaveSignUp('/api/sign-up', makeAxiosHttpClient())
}
