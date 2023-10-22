import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import Styles from "./Styles.module.css";
import MyTextInput from '../../components/Form/TextInput';
import MyCheckbox from '../../components/Form/Checkbox';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container, CssBaseline, Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";



const defaultTheme = createTheme();




function SignUp() {
    let navigate = useNavigate(); 

    const routeChange = (isLoggedIn) =>{ 
        let path = `/signin`; 
        navigate(path);
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="xs">
                <CssBaseline>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: 1,
                            marginBottom: 18,
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Sign Up
                        </Typography>

                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                acceptedTerms: false, // added for our checkbox
                            }}
                            validationSchema={Yup.object({
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
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 
                                        'Must Contain at least8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character')
                                    .required('Password is Required'),
                                acceptedTerms: Yup.boolean()
                                    .required('Required')
                                    .oneOf([true], 'You must accept the terms and conditions.'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    routeChange();
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            <Form className={Styles.form}>
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                />
                        
                                <MyTextInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                />
                        
                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                />

                                <MyTextInput 
                                    label="Password"
                                    name="password"
                                    type="password"
                                />
                        
                                <MyCheckbox name="acceptedTerms">
                                    I accept the terms and conditions
                                </MyCheckbox>
                        
                                <button type="submit">Submit</button>
                            </Form>
                        </Formik>
                    </Box>
                </CssBaseline>
            </Container>
        </ThemeProvider>
    );
}
  
  export default SignUp