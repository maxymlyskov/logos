import * as React from "react";
import { Formik, Form, Field } from "formik";
import Button from "./common/Button";
import * as Yup from "yup";
import RegsiterCard from "./common/RegsiterCard";

interface MyFormValues {
  email: string;
  username: string;
  password: string;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required."),
  username: Yup.string()
    .min(2, "Your username is too short!")
    .max(20, "Your username is yoo long!")
    .required("Username is required."),
  password: Yup.string()
    .min(8, "Your password is too short!")
    .max(20, "Your password is yoo long!")
    .required("Password is required."),
});

const Regsiter: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: "", username: "", password: "" };
  return (
    <div className="grid grid--1x2">
      <div className="centered">
        <div className="">
          <h3>Get Started</h3>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            console.log(values.email);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="centered form--box">
                <div className="form--container">
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                  <Field
                    className="form form--service"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  {touched.email && errors.email && (
                    <p className="form__error">{errors.email}</p>
                  )}
                </div>
                <div className="form--container">
                  <label htmlFor="username" className="form__label">
                    Username
                  </label>
                  <Field
                    className="form form--service"
                    id="username"
                    name="username"
                    placeholder="Your username"
                  />
                  {touched.username && errors.username && (
                    <p className="form__error">{errors.username}</p>
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
                    placeholder="Your password (min 8 letters)"
                    className="form form--service"
                  />
                  {touched.password && errors.password && (
                    <p className="form__error">{errors.password}</p>
                  )}
                </div>
                <Button
                  title="Sign Up"
                  type="submit"
                  className="form__button"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="regsiter__card">
        <RegsiterCard />
      </div>
    </div>
  );
};

export default Regsiter;
