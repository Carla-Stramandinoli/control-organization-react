import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme
} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import firebaseApp from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

function Login() {
  const defaultTheme = createTheme();

  const [record, setRecord] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasenia = e.target.password.value;

    if (record) {
      await createUserWithEmailAndPassword(auth, correo, contrasenia);
    } else {
      await signInWithEmailAndPassword(auth, correo, contrasenia);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {record ? "Registrate" : "Inicia sesion"}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {record ? "Registrate" : "Inicia sesion"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => setRecord(!record)}>
                  {record ? "¿Ya tienes una cuenta? Inicia sesion" : "¿No tienes cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login;