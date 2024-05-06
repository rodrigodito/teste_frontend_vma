import { SignUpDto, SignUpResponse } from '@/domain/dto/save-sign-up-dto'

export interface SaveSignUp {
  save(formData: SignUpDto): Promise<SignUpResponse>
}
