import * as yup from 'yup'

export const SignUpFormSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.string(),
    password: yup.string().min(5).required(),
    policyTerms: yup.boolean()
  })
  .required()
