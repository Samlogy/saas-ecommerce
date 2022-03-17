import * as yup from 'yup';

export const addProductSchema = yup.object().shape({
    img: yup.string().required("Full Name required"),
    name: yup.string().required("Product Name required"),
    description: yup.string().required("Product Description required"),
    price: yup.number().required("Product Price required"),
    coupon: yup.string()
});
