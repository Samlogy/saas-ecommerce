import * as yup from 'yup';
// import { t } from "@lang/i18n";



export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Enter a valid Email Address").required("Email Address Required")
});