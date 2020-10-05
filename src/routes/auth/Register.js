import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  FormGroup,
  makeStyles,
  Link,
  Card,
  CardContent,
} from "@material-ui/core";
import { Formik } from "formik";
import myValidator from "validator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  btnSubmit: {
    width: "100%",
    margin: "20px 0",
  },
  inp: {
    margin: "10px 0",
  },
  signupLink: {
    marginLeft: "auto",
    display: "block",
    textAlign: "end",
  },
  formWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const LoginForm = ({
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    isSubmitting,
  }) => (
    <form onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <FormGroup>
        <TextField
          label="Введите email"
          error={!!errors.email && touched.email}
          className={classes.inp}
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          helperText={!!errors.email && touched.email && errors.email}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Придумайте пароль"
          error={!!errors.password && touched.password}
          сlassName={classes.inp}
          type="text"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          helperText={!!errors.password && touched.password && errors.password}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Повторить пароль"
          error={!!errors.password && touched.password}
          сlassName={classes.inp}
          type="text"
          name="password2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password2}
          helperText={
            !!errors.password2 && touched.password2 && errors.password2
          }
        />
      </FormGroup>
      <Button
        className={classes.btnSubmit}
        type="submit"
        disabled={isSubmitting}
        color="primary"
        variant="contained"
      >
        Отправить
      </Button>
      <Link
        className={classes.signupLink}
        onClick={() => history.replace("/auth/login")}
      >
        Уже есть аккаунт?
      </Link>
    </form>
  );

  const validator = (values) => {
    const errors = {};
    if (!values.email.trim()) {
      errors.email = "Это поле обязательно!";
    } else if (!myValidator.isEmail(values.email)) {
      errors.email = "Неправильный email!";
    }

    if (!values.password) {
      errors.password = "Это поле обязательно";
    } else if (values.password.length < 6) {
      errors.password = "Минимальная длина Пароля 6 символов";
    }

    if (!values.password2) {
      errors.password2 = "Это поле обязательно";
    } else if (values.password !== values.password2) {
      errors.password2 = "Пароли не совпадают";
    }
    return errors;
  };

  const handleFormSubmit = (values, helpers) => {
    console.log(values);
    setTimeout(() => {
      helpers.setSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: "#c7c7c7" }}>
      <Container maxWidth="md">
        <Grid className={classes.formWrapper} container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardContent>
                <Formik
                  initialValues={{ email: "", password: "", password2: "" }}
                  validate={validator}
                  onSubmit={handleFormSubmit}
                >
                  {LoginForm}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
