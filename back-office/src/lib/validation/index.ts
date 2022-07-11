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
  quantity: yup
    .number()
    .positive('Quantity must be a positive number')
    .typeError('Quantity must be a number')
    .required('Quantity required'),
  categories: yup.array(yup.string().required('Category required').oneOf([''])),
  discount: yup
    .number()
    .positive('Discount must be a positive number')
    .typeError('Discount must be a number')
    .transform((v, o) => (o === '' ? null : v))
})

/* Home */
export const dealFormSchema = yup.object().shape({
  title: yup.string().required('tile required'),
  description: yup.string().required('Description required'),
  dueDate: yup.string().required('Due Date required required'), // check validity data ??
  image: yup.string().required('image required')
})

export const aboutFormSchema = yup.object().shape({
  title: yup.string().required('tile required'),
  description: yup.string().required('Description required'),
  image: yup.string().required('image required')
})

export const serviceFormSchema = yup.object().shape({
  name: yup.string().required('tile required'),
  description: yup.string().required('Description required'),
  image: yup.string().required('image required')
})

export const questionAnswerFormSchema = yup.object().shape({
  question: yup.string().required('question required'),
  answer: yup.string().required('answer required')
})
