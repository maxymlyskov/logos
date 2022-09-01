import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./common/Button";

interface ForgotPasswordFormValues {
  email: string;
}

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required."),
});

const ForgotPassword: React.FC<{}> = () => {
  const initialValues: ForgotPasswordFormValues = { email: "" };

  return (
    <div className="forgot-password">
      <h3>Forgot password</h3>
      <p>
        Forgotten your password? Not a problem. Enter your email address and
        we`ll send you an email with instructions for resetting it.
      </p>
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
            <div className="centered form--box forgot-password__form ">
              <div className="form--container">
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
              <Button
                title="Send Email"
                type="submit"
                className="form__button"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
