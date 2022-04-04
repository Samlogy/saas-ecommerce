import * as yup from 'yup';


// export const forgotPasswordSchema = yup.object().shape({
//     email: yup.string().email("Enter a valid Email Address").required("Email Address required")
// });

// export const resetPasswordSchema = yup.object().shape({
//     confirm_password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required").oneOf([yup.ref('password'), null], 'Passwords do not match'),
//     password: yup.string().required("Password is required"),                                     
// }); 

// export const registerSchema = yup.object().shape({  
//     fullName: yup.string().required("Full Name required"),
//     email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
//     password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required"),
//     confirm_password: yup.string().min(8, "passwords do not match").required(" confirm password required").oneOf([yup.ref('password'), null], 'Passwords do not match'),
//     acceptTerms: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
// });

// export const loginSchema = yup.object().shape({
//     email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
//     password: yup.string().required("Password is required"),
// });

export const contactSchema = yup.object().shape({
    name: yup.string(),
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
    avatar: yup.string(),
    fullName: yup.string().required("Full Name required"),
    email: yup.string().email('Enter a valid Email Address').required("Email required"),
    mobile: yup.string(),
    // customer
    address_1: yup.string(),
    address_2: yup.string(),
    country_code: yup.number()
                    .positive('Country Code must be a positive number')
                    .typeError('Country Code must be a number'),
    postale_code: yup.number()
                    .positive('Postale Code must be a positive number')
                    .typeError('Postale Code must be a number'),
    // vendor
    company_name: yup.string(),
    company_description: yup.string(),
    company_address: yup.string(),
    company_code: yup.string(),
    company_country_code: yup.number()
                            .positive('Company Country Code must be a positive number')
                            .typeError('Company Country Code must be a number'),
    company_postale_code: yup.number()
                            .positive('Company Postale Code must be a positive number')
                            .typeError('Company Postale Code must be a number'),
    });

export const commentSchema = yup.object().shape({
    fullName: yup.string(),
    email: yup.string().email('Enter a valid Email Address').required('Email Address re'),
    comment: yup.string().required('Enter your comment please'),
});


export const testSchema = yup.object().shape({  
    fullName: yup.string().required("Full Name required"),
    username: yup.string().required("username required"),
    address: yup.string().required("address required"),
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    age: yup.string().required("address required"),
});