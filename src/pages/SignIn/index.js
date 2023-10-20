import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function SignIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="xs">
                <CssBaseline>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: 18,
                        }}>
                        
                        <Typography variant="h5">
                            Sign In
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}>
                            
                            <TextField 
                                label="Email Address"
                                required
                                fullWidth
                                id="email"
                                name="email" 
                                variant="outlined"
                                autoComplete="email" 
                                margin='normal'
                            />
                            <TextField 
                                label="Password"
                                required
                                fullWidth
                                id="password"
                                name="passport"
                                type="password" 
                                autoComplete="current-password"
                                variant="outlined" 
                                margin='normal'
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button 
                                variant='contained'
                                fullWidth
                                type='submit'
                                sx={{
                                    mt: 2,
                                    mb: 2
                                }}>
                                Giriş Yap
                            </Button>
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
                    </Box>
                </CssBaseline>
            </Container>
        </ThemeProvider>
    )
  }
  
  export default SignIn;