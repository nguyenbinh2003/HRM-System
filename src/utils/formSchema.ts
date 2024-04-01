import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required !"),
  password: Yup.string()
    .min(6, "Password must be 6 characters long.")
    .required("Password is required !"),
  company_id: Yup.string().required("Factory is required !"),
});

export const forgotSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required !"),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 characters long.")
    .required("Password is required !"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match.")
    .required("Confirm password is required !"),
});
