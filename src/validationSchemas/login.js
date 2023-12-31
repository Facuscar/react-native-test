import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail format is invalid')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(5, 'Password is too short')
    .max(60, 'Password is too long')
    .required('Password is required')
})
