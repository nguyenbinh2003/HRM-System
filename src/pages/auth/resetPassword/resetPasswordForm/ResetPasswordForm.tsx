import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { changePasswordSchema } from "@/src/utils/formSchema";
// import AuthService from "@/src/services/auth/authServices";
// import { toast } from "react-toastify";
import { useState } from "react";

export default function ResetPasswordForm() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
      }}
      validationSchema={changePasswordSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="border-0">
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div style={{ position: "relative", minHeight: "48px" }}>
              <Field
                className={
                  errors.password && touched.password
                    ? `form-control is-invalid`
                    : `form-control`
                }
                type={isShowPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                validateOnBlur
                validateOnChange={false}
                style={{
                  height: "48px",
                }}
              />
              {!!values.password ? (
                <button
                  className="border-0"
                  style={{
                    background: "transparent",
                    position: "absolute",
                    right: errors.password && touched.password ? "10%" : "4%",
                    top: 0,
                    padding: "5px",
                    color: "#1d1d1e",
                    transition: ".3s",
                  }}
                  type="button"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              ) : (
                ""
              )}

              {errors.password && touched.password ? (
                <div className="invalid-feedback">{errors.password}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <Field
              className={
                errors.password_confirmation && touched.password_confirmation
                  ? `form-control is-invalid`
                  : `form-control`
              }
              type={isShowPassword ? "text" : "password"}
              name="password_confirmation"
              id="confirmPassword"
              placeholder="Confirm Password"
              validateOnBlur
              validateOnChange={false}
              style={{
                height: "48px",
              }}
            />
            {errors.password_confirmation && touched.password_confirmation ? (
              <div className="invalid-feedback">
                {errors.password_confirmation}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="d-flex flex-column" style={{ margin: "8px 0" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                height: "48px",
                margin: "18px 0 0",
                textTransform: "capitalize",
                fontSize: "16px",
                color: "rgb(251, 253, 255)",
                fontFamily:
                  '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                fontWeight: 400,
                lineHeight: 1.71429,
                backgroundColor: "rgb(0, 145, 255)",
                boxShadow: "none",
                borderRadius: "6px",
              }}
            >
              Confirm
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
