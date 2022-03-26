import * as yup from 'yup'

export const addProductSchema = yup.object().shape({
  img: yup.string().required('Full Name required'),
  name: yup.string().required('Product Name required'),
  description: yup.string().required('Product Description required'),
  price: yup
    .number()
    .positive('Price must be a positive number')
    .typeError('Price must be a number')
    .required('Price required'),
  discount: yup
    .number()
    .positive('Discount must be a positive number')
    .typeError('Discount must be a number')
    .transform((v, o) => (o === '' ? null : v))
})
