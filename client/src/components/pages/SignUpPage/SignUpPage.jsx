import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser, addAvatar } from "../../../redux/features/application";
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
  backgroundImage:`url(${'https://moiinstrumentu.ru/wp-content/uploads/2019/04/instrumenty-dlja-doma-i-remonta.png'})`,
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

function SignUpPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workingUser, setWorkingUser] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);

  

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeWorkingUser = (e) => {
    setWorkingUser(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTransfer = () => {
    dispatch(
      createUser(
        name,
        lastName,
        workingUser,
        email,
        login,
        password,
        ConfirmPassword,
        image
      )
    );
  };

  const handleAddAvatar = async (e) => {
    await dispatch(addAvatar(e));
  };

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
            Регистрация
          </Typography>
          <Button
            //className={classes.input}
            onChange={handleAddAvatar}
            variant="contained"
          >
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleChangeImage}
              value={image}
            />
          </Button>

          <Box
            component="form"
            noValidate
            onSubmit={handleTransfer}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={name}
                  onChange={handleChangeName}
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Введите имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={lastName}
                  onChange={handleChangeLastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Введите фамилию"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={workingUser}
                  onChange={handleChangeWorkingUser}
                  required
                  fullWidth
                  id="WorkingUser"
                  label="Выбрать роль"
                  name="WorkingUser"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={email}
                  onChange={handleChangeEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={login}
                  onChange={handleChangeLogin}
                  required
                  fullWidth
                  id="login"
                  label="Введите логин"
                  name="login"
                  autoComplete="login"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue={password}
                  onChange={handleChangePassword}
                  required
                  fullWidth
                  name="password"
                  label="Введите пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleTransfer}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  У вас уже есть аккаунт? <b>Войти</b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}

export default SignUpPage;
