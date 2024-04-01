import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { forgotSchema } from "@/src/utils/formSchema";
import AuthService from "@/src/services/auth/authServices";
import { toast } from "react-toastify";

const AuthServices = new AuthService();

export default function ForgotForm() {
  const handleSubmit = async (data: object) => {
    const forgot = await AuthServices.forgotPassword(data);
    console.log(forgot);
    if (forgot.status < 400) {
      toast.success("We have sent you the OTP code, please check your email");
      return;
    }
    toast.error("Please try again with an valid email address.");
    return;
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={forgotSchema}
    >
      {({ errors, touched }) => (
        <Form
          style={{ minWidth: "23rem", background: "rgb(255, 255, 255)" }}
          className="p-3 border border-light rounded shadow-sm"
        >
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              className={
                errors.email && touched.email
                  ? `form-control is-invalid`
                  : `form-control`
              }
              type="email"
              name="email"
              id="email"
              placeholder="Email@gmail.com"
              validateOnBlur
              validateOnChange={false}
            />
            {errors.email && touched.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-3 d-flex align-items-center flex-column">
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", height: "48px" }}
            >
              Confirm & Send OTP
            </Button>
            <Link className="mt-3" to={"/auth/sign-in"}>
              Back To Sign In
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
