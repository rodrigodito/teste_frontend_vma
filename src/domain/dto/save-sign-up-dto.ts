export type SignUpDto = {
  email: string
  fullName: string
  mobile?: string
  password: string
  policyTerms?: boolean
}

export type SignUpResponse = {
  message: string
}
