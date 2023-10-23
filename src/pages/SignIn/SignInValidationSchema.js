import * as yup from 'yup';

export let signInValidationSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is Required'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 
            'Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character')
        .required('Password is Required'),
    remember: yup
        .boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
})
