import * as yup from 'yup';


export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email Address").required("Email Address required")
});

export const resetPasswordSchema = yup.object().shape({
    confirm_password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required").oneOf([yup.ref('password'), null], 'Passwords do not match'),
    password: yup.string().required("Password is required"),                                     
}); 

export const registerSchema = yup.object().shape({  
    fullName: yup.string().required("Full Name required"),
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required"),
    confirm_password: yup.string().min(8, "passwords do not match").required(" confirm password required").oneOf([yup.ref('password'), null], 'Passwords do not match'),
    acceptTerms: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
});

export const loginSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    password: yup.string().required("Password is required"),
});

export const contactSchema = yup.object().shape({
    name: yup.string().required("Full Name required"),
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    message: yup.string().required("Message required"),
});

export const addProductSchema = yup.object().shape({
    img: yup.string().required("Full Name required"),
    name: yup.string().required("Product Name required"),
    description: yup.string().required("Product Description required"),
    price: yup.number().required("Product Price required"),
    coupon: yup.string()
});

export const profileSchema = yup.object().shape({
    img: yup.string().required("Full Name required"),
    name: yup.string().required("Product Name required"),
    description: yup.string().required("Product Description required"),
    price: yup.number().required("Product Price required"),
    coupon: yup.string()
});
