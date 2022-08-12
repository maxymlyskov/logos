import * as React from "react";
import { Formik, Form, Field } from "formik";
import Button from "./common/Button";
import * as Yup from "yup";

interface MyFormValues {
  email: string;
  password: string;
}

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required."),
  password: Yup.string()
    .min(2, "Your password is too short!")
    .max(20, "Your password is yoo long!")
    .required("Password is required."),
});

const LogIn: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  return (
    <div className="centered form--login">
      <div className="">
        <h3>Log In</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values.email);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="centered form--box ">
              <div className="form--container">
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
                <Field
                  className="form form--service"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                {touched.email && errors.email && (
                  <p className="form__error">{errors.email}</p>
                )}
              </div>
              <div className="form--container">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form form--service"
                />
                {touched.password && errors.password && (
                  <p className="form__error">{errors.password}</p>
                )}
              </div>
              <Button title="Log In" type="submit" className="form__button" />
              <div className="form--bottom">
                <label className="form form--gray">Forgot password</label>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
