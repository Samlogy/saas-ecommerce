import * as yup from 'yup'

export const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Enter a valid Email Address').required('Email Address required'),
  message: yup.string().required('Message required')
})

export const profileSchema = yup.object().shape({
  avatar: yup.string().required('Avatar required'),
  fullName: yup.string().required('Full Name required'),
  email: yup.string().email('Enter a valid Email Address').required('Email required'),
  mobile: yup.string(),
  // customer
  address_1: yup.string(),
  address_2: yup.string(),
  country_code: yup
    .number()
    .positive('Country Code must be a positive number')
    .typeError('Country Code must be a number')
    .nullable(),
  postale_code: yup
    .number()
    .positive('Postale Code must be a positive number')
    .typeError('Postale Code must be a number')
    .nullable(),
  // vendor
  company_name: yup.string(),
  company_description: yup.string(),
  company_address: yup.string(),
  company_code: yup.string(),
  company_country_code: yup
    .number()
    .positive('Company Country Code must be a positive number')
    .typeError('Company Country Code must be a number')
    .nullable(),
  company_postale_code: yup
    .number()
    .positive('Company Postale Code must be a positive number')
    .typeError('Company Postale Code must be a number')
    .nullable()
})

export const commentSchema = yup.object().shape({
  comment: yup.string().required('Enter your comment please')
})

export const checkoutchema = yup.object().shape({
  // billing address
  fullName: yup.string().required('Full Name required'),
  email: yup.string().email('Enter a valid Email Address').required('Email Address required'),
  phone: yup.string().required('Phone required'),
  address: yup.string().required('Address required'),
  zipCode: yup.string().required('Zip Code required'),
  isAddressShipping: yup.string().required('Country required'),
  shippingAddress: yup.string(),
  // shipping method
  shoppingMethod: yup.string(),
  discountCode: yup.string()
  // payment method
  // stripejs form
})

// fullName, email, phone, address, zipCode, isAddressShipping, shipping address (Billing Address)
// radio buttons (options), discount code --> (form apply) (Payment Method)
// stripe.js form (Payment)
// feed back --> redirect after 5s to /products
