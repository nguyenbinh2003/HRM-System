import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { toast } from "react-toastify";

import { forgotSchema } from "@/src/utils/formSchema";
import AuthService from "@/src/services/auth/authServices";
import checkCircle from "@/src/assets/check-circle.png";
import { MoonLoader } from "react-spinners";
import { useState } from "react";

const AuthServices = new AuthService();

export default function ForgotForm() {
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);

  const handleSubmit = async (data: object) => {
    setIsSendEmail(true);
    const forgot = await AuthServices.forgotPassword(data);
    console.log(forgot);
    if (forgot.status < 400) {
      toast.success("We have sent you the OTP code, please check your email.", {
        icon: () => <img src={checkCircle} alt="" />,
        style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
        hideProgressBar: true,
      });
    }
    toast.error("Please try again with an valid email address.", {
      icon: () => <BiError size={20} />,
      style: {
        background: "#FFEFEF",
        color: "#E5484D",
        fontSize: "13px",
      },
      hideProgressBar: true,
    });
    setIsSendEmail(false);
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
              className="d-flex justify-content-center align-items-center"
              variant="primary"
              type={isSendEmail ? "button" : "submit"}
              style={{
                width: "100%",
                height: "48px",
                cursor: isSendEmail ? "no-drop" : "pointer",
              }}
            >
              {isSendEmail ? (
                <MoonLoader color="#FBFDFF" size={20} />
              ) : (
                "Sign In"
              )}
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
