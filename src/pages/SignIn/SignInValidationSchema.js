import * as yup from 'yup';

export let signInValidationSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is Required'),
    password: yup
        .string() .required('Password is Required'),
    remember: yup
        .boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
})
