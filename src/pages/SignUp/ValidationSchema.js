import * as Yup from 'yup';

export let validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    password: Yup.string()
        .required('Password is Required'),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
})
