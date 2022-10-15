import * as yup from 'yup'
import { z } from 'zod'

const requiredField = requiredText => ({
  is: false,
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
  // Customer
  shippingMethod: yup.string().required('Shipping Method required'),
  shippingAddress: yup.string().required('Shipping Address required'),
  shippingAddress2: yup.string().required('Shipping Address 2 required'),
  cityCustomer: yup.string().required('City required'),
  countryCustomer: yup.string().required('Country required'),
  stateCustomer: yup.string().required('State / Province required'),
  zipCodeCustomer: yup.string().required('Zip code / Postal required'),
  // Vendor
  companyLogo: yup.string().required('Company Logo required'),
  companyName: yup.string().required('Company Name required'),
  companyAddress: yup.string().required('Shipping Address 2 required'),
  companyCity: yup.string().required('City required'),
  companyCountry: yup.string().required('Country required'),
  companyState: yup.string().required('State / Province required'),
  companyZipCode: yup.string().required('Zip code / Postal required')
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
      .when('isAddressShipping', requiredField('Shipping Address is required'))
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
