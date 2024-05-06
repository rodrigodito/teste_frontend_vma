import { Control } from 'react-hook-form'

import { SignUpFormData } from '../SignUpForm.types'

export type PolicyTermsProps = {
  handlePolicyCheck: (checked: boolean) => void
  hasError: boolean
}
