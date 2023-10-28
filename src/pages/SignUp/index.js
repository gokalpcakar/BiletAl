import { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import { validationSchema } from "./ValidationSchema";

import Styles from "./Styles.module.css";
import MyTextInput from "../../components/Form/TextInput";
import MyCheckbox from "../../components/Form/Checkbox";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, CssBaseline, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import PageWithHelmet from "../../components/PageWithHelmet";

const defaultTheme = createTheme();

function SignUp() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let navigate = useNavigate();
  const routeChange = (isLoggedIn) => {
    let path = `/signin`;
    navigate(path);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <PageWithHelmet title={"Kaydol"} />
      <Container maxWidth="xs">
        <CssBaseline>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Sign Up
            </Typography>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                acceptedTerms: false, // added for our checkbox
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  routeChange();
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className={Styles.form}>
                <MyTextInput label="First Name" name="firstName" type="text" />

                <MyTextInput label="Last Name" name="lastName" type="text" />

                <MyTextInput label="Email Address" name="email" type="email" />

                <MyTextInput label="Password" name="password" type="password" />

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

export default SignUp;
