import * as yup from 'yup'

export const userProfileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required.'),
  password: yup
    .string()
    .trim()
    .required('Password is required.')
    .min(4, 'Must be at least six characters.')
    .max(10, 'Cannot be longer than 10 characters.')
    .notOneOf(
      ['password', 'kittens', 'cows'],
      'Cannot be a commonly used password.',
    ),
  email: yup
    .string()
    .trim()
    .email('Must be a valid email.'),
})
