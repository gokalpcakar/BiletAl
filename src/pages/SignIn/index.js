import React, { useRef, useState } from "react";
import { createTheme, ThemeProvider, Container, CssBaseline, Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MyTextInput from "../../components/Form/TextInput";
import MyCheckbox from "../../components/Form/Checkbox";
import SubmitButton from "../../components/Form/SubmitButton"
import PageWithHelmet from "../../components/PageWithHelmet";
import { Form, Formik } from "formik";
import { signInValidationSchema } from "./SignInValidationSchema";
import ReCAPTCHA from "react-google-recaptcha";
import { controllerUserMail } from '../../network/requests/UsersServices'
import { useAuth } from "../../context/AuthContext"
import { fetchLogin } from '../../network/requests/UsersServices'
import { controllerUserPassword } from '../../network/requests/UsersServices'

const defaultTheme = createTheme();

function SignIn() {
  const { login } = useAuth();
  const [error, setError] = useState(""); // Hata mesajını saklamak için bir state ekledik
  const navigate = useNavigate();
  const captchaRef = useRef(null);

  const formStyle = {
    width: "100%",
  }

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
                remember: false,
              }}
              validationSchema={signInValidationSchema}
              onSubmit={async (values, bag) => { // Asenkron işlemi işaretledik
                try {
                  const checkUserMail = await controllerUserMail(values.email); // Asenkron işlem
                  const checkUserPassword = await controllerUserPassword(values.password); // Asenkron işlem

                  if (checkUserMail === undefined) {
                    setError('E-mail adresi bulunamadı');
                  } else if (checkUserPassword === undefined) {
                    setError('E-mail veya parola hatalı');
                  } else {
                    const loginResponse = await fetchLogin(values.email); // Asenkron işlem

                    const captchaValue = captchaRef.current.getValue();
                    if (!captchaValue) {
                      alert("Please verify the reCAPTCHA!");
                    } else {
                      // make form submission
                      login(loginResponse)
                      navigate("/admin")
                    }
                    }
                  } catch (error) {
                    setError('Bir hata oluştu. Lütfen tekrar deneyin.');
                  }
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
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <SubmitButton label="Giriş Yap" />
              </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Şifreni mi unuttun?
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
