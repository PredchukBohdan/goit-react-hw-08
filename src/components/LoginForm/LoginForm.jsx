import { Form, Formik, Field, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
  };
  const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const validation = Yup.object({
    email: Yup.string()
      .matches(EMAIL_REGX, `Invalid email, example: "user@gmail.com"`)
      .required("Field is required"),
    password: Yup.string().required("Field is required"),
  });

  return (
    <section className={s.login}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form>
          <div className={s.fieldset}>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.fieldset}>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <button className={s.submit} type="submit">
            Log In
          </button>
          <Link className={s.accountLink} to="/register">
            Don't have an account yet? Sign Up
          </Link>
        </Form>
      </Formik>
    </section>
  );
};
