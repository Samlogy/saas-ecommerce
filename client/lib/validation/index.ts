import * as yup from 'yup'

const requiredField = (initState: boolean, requiredText: string) => ({
  is: initState,
  then: yup.string().required(requiredText),
  otherwise: yup.string()
})

export const contactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Enter a valid Email Address').required('Email Address required'),
  message: yup.string().required('Message required')
})

export const profileSchema = yup.object().shape({
  // Default
  avatar: yup.string().required('Avatar required'),
  fullName: yup.string().required('Full Name required'),
  email: yup.string().email('Enter a valid Email Address').required('Email required'),
  phone: yup.string(),
  address: yup.string().required('Address required'),
  // radio fields
  isCustomer: yup.boolean(),
  isVendor: yup.boolean(),
  // Customer
  shippingMethod: yup
    .string()
    .when('isCustomer', requiredField(true, 'Shipping Method is required')),
  shippingAddress: yup
    .string()
    .when('isCustomer', requiredField(true, 'Shipping Address is required')),
  shippingAddress_2: yup.string(),
  cityCustomer: yup.string().when('isCustomer', requiredField(true, 'City is required')),
  countryCustomer: yup.string().when('isCustomer', requiredField(true, 'Country is required')),
  stateCustomer: yup
    .string()
    .when('isCustomer', requiredField(true, 'State / Province is required')),
  zipCodeCustomer: yup
    .string()
    .when('isCustomer', requiredField(true, 'Zip code / Postal is required')),
  // Vendor
  companyLogo: yup.string().when('isVendor', requiredField(true, 'Company Logo is required')),
  companyName: yup.string().when('isVendor', requiredField(true, ' Company Name is required')),
  companyAddress: yup.string().when('isVendor', requiredField(true, 'Company Address is required')),
  companyCity: yup.string().when('isVendor', requiredField(true, 'Company City is required')),
  companyCountry: yup.string().when('isVendor', requiredField(true, 'Company Country is required')),
  companyState: yup.string().when('isVendor', requiredField(true, 'Company State is required')),
  companyZipCode: yup
    .string()
    .when('isVendor', requiredField(true, 'Company Zip code / Postal is required'))
})

export const commentSchema = yup.object().shape({
  comment: yup.string().required('Enter your comment please')
})

export const checkoutSchema: any = {
  1: yup.object().shape({
    // billing address
    fullName: yup.string().required('Full Name required'),
    email: yup.string().email('Enter a valid Email Address').required('Email Address required'),
    phone: yup.string().required('Phone required'),
    address: yup.string().required('Address required'),
    zipCode: yup.string().required('Zip Code required'),
    isAddressShipping: yup.boolean(), // boolean
    shippingAddress: yup
      .string()
      .when('isAddressShipping', requiredField(false, 'Shipping Address is required'))
  }),
  2: yup.object().shape({
    // shipping method
    shippingMethod: yup.string(),
    discountCode: yup.string()
  }),
  3: {},
  4: {}
}

export const subscribeSchema = yup.object().shape({
  emailSub: yup.string().email('Enter a valid Email Address').required('Email Address required')
})
