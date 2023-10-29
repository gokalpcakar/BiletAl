import React, { useRef } from "react";
import { createTheme, ThemeProvider, Container, CssBaseline, Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MyTextInput from "../../components/Form/TextInput";
import MyCheckbox from "../../components/Form/Checkbox";
import SubmitButton from "../../components/Form/SubmitButton"
import PageWithHelmet from "../../components/PageWithHelmet";
import { Form, Formik } from "formik";
import { signInValidationSchema } from "./SignInValidationSchema";
import ReCAPTCHA from "react-google-recaptcha";

const defaultTheme = createTheme();

function SignIn() {
  let navigate = useNavigate();
  const routeChange = (isLoggedIn) => {
    let path = `/`;
    navigate(path);
  };

  const captchaRef = useRef(null);

  const formStyle = {
    width: "100%",
  }

  return (
    <ThemeProvider theme={defaultTheme}>
     <PageWithHelmet title={"Giriş Yap"}/>
      <Container maxWidth="xs">
        <CssBaseline>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 25,
              marginBottom: 20,
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
                  const token = captchaRef.current.getValue();
                  captchaRef.current.reset();
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form style={formStyle}>
                <MyTextInput label="Email Address" name="email" type="email" />

                <MyTextInput label="Password" name="password" type="password" />

                <MyCheckbox name="remember">Remember Me</MyCheckbox>

                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  ref={captchaRef}
                />

                <SubmitButton label="Giriş Yap"/>
              </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Şifrani mi unuttun?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Hesabın yok mu? Kayıt Ol"}
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
