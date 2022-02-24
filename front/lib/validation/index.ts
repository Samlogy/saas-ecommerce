import * as yup from 'yup';


export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email Address").required("Email Address required")
});

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required"),                  
    confirm_password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required"),                   
}); 

export const registerSchema = yup.object().shape({  
    fullName: yup.string().required("Full Name required"),
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    password: yup.string().min(8, "Password is at least 8 charasters long").required("Password is required"),
    confirm_password: yup.string().min(8, "passwords do not match").required(" confirm password required")
});

export const loginSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    password: yup.string().required("Password is required"),
});

export const contactSchema = yup.object().shape({
    fullName: yup.string().required("Full Name required"),
    email: yup.string().email("Enter a valid Email Address").required("Email Address required"),
    message: yup.string().required("Message Address required"),
});

// add - edit --> product