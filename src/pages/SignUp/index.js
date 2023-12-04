import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./ValidationSchema";
import MyTextInput from "../../components/Form/TextInput";
import MyCheckbox from "../../components/Form/Checkbox";
import SubmitButton from "../../components/Form/SubmitButton";
import {
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PageWithHelmet from "../../components/PageWithHelmet";
//import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "../../context/AuthContext";
import { controllerUserMail } from "../../network/requests/UsersServices";
import { fetchRegister } from "../../network/requests/UsersServices";
const defaultTheme = createTheme();

function SignUp() {
  const { login } = useAuth();
  const [error, setError] = useState(""); // Hata mesajını saklamak için bir state ekledik
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  };

  let navigate = useNavigate();

  const formStyle = {
    width: "100%",
  };

 //const captchaRef = useRef(null);  localde çalışıyor canlıda çalışmıyor

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
              marginTop: 17,
              marginBottom: 9,
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
              onSubmit={async (values, bag) => {
                try {
                  const checkUserMail = await controllerUserMail(values.email); // Asenkron işlem

                  if (checkUserMail !== undefined) {
                    setError("Bu e-mail adresi ile kayıt olunmuştur.");
                  } else {
                    const registerResponse = await fetchRegister({
                      email: values.email,
                      password: values.password,
                    });

                    login(registerResponse);
                    navigate("/admin");
                    routeChange();
                   // const token = captchaRef.current.getValue();
                    //captchaRef.current.reset();
                  }
                } catch (error) {
                  setError("Bir hata oluştu. Lütfen tekrar deneyin.");
                }
              }}
            >
              <Form style={formStyle}>
                <MyTextInput label="First Name" name="firstName" type="text" />
                <MyTextInput label="Last Name" name="lastName" type="text" />
                <MyTextInput label="Email Address" name="email" type="email" />
                <MyTextInput label="Password" name="password" type="password" />
                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>
                {/* <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  ref={captchaRef}
                /> */}
                <SubmitButton label="Kayıt Ol" />
                {error && <div style={{ color: "red" }}>{error}</div>}
              </Form>
            </Formik>
            <Grid container>
              <Grid item>
                <Link to="/signin" variant="body2">
                  {"Zaten bir hesabın var mı? Giriş Yap"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
