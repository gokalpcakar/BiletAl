import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, CssBaseline, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import Styles from "./Styles.module.css";
import MyTextInput from "../../components/Form/TextInput";
import MyCheckbox from "../../components/Form/Checkbox";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useFormik, Field, Form, Formik } from "formik";
import { signInValidationSchema } from "./SignInValidationSchema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const defaultTheme = createTheme();

function SignIn() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let navigate = useNavigate();
  const routeChange = (isLoggedIn) => {
    let path = `/`;
    navigate(path);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <PageWithHelmet title={"Giriş Yap"} />
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
            <Typography variant="h5" sx={{ mb: 1 }}>
              Sign In
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: false, // added for our checkbox
              }}
              validationSchema={signInValidationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  routeChange();
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className={Styles.form}>
                <MyTextInput label="Email Address" name="email" type="email" />

                <MyTextInput label="Password" name="password" type="password" />

                <MyCheckbox name="remember">Remember Me</MyCheckbox>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
