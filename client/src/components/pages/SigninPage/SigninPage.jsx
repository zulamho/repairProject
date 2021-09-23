import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth } from "../../../redux/features/application";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container:{
  backgroundImage:`url(${'https://stroiidea.ru/assets/images/staty/instrumenty-dlya-remonta-kvartiry.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  margin:'-63px',
  padding:'40px 0'
  },
  main:{
    borderRadius:10,
    backgroundColor:'white'
  }
}))

function SigninPage() {
  const classes = useStyles()
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.application.token);

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleTransfer = () => {
    dispatch(auth(login, password));
  };
  //const classes = useStyles();
  // if (token) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Grid className = {classes.container}>
      <Container component="main" maxWidth="xs" className = {classes.main}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box
            component="form"
            //  onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              type="text"
              onChange={handleChangeLogin}
              margin="normal"
              required
              fullWidth
              id="login"
              label="Введите логин"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              type="password"
              onChange={handleChangePassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить пароль"
            />
            <Button
              onClick={handleTransfer}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Зарегистрироваться"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}

export default SigninPage;
