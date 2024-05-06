import { Controller } from 'react-hook-form'

import { Checkbox } from '@/components/Checkbox'

import { policyLabel } from './PolicyTerms.styles'
import { PolicyTermsProps } from './PolicyTerms.types'

export function PolicyTerms({ handlePolicyCheck, hasError }: PolicyTermsProps) {
  return (
    <div className="flex items-center gap-2 py-1 lg:mt-2">
      <Checkbox
        id="privacyPolicy"
        onCheckedChange={handlePolicyCheck}
        hasError={hasError}
      />

      <label htmlFor="privacyPolicy" className={policyLabel({ hasError })}>
        Tick this box to confirm {`you've`} read and agreed to our{' '}
        <a href="#" className="underline">
          Terms
        </a>{' '}
        and{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </label>
    </div>
  )
}
