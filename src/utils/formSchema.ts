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

export const employeeSchema = Yup.object().shape({
  name: Yup.string().required("Please input Name"),
  gender: Yup.string().required("Please input Gender"),
  dob: Yup.string().required("Please input Date of birth"),
  ktp_no: Yup.string().required("Please input KTP No"),
  contract_start_date: Yup.string().required(
    "Please input Contract Start Date"
  ),
  type: Yup.number().required("Please input Employee Type"),
  nc_id: Yup.string(),
  safety_insurance: Yup.number().required("Please input Safety Insurance Amount"),
  health_insurance: Yup.number().required("Please input Healthy Insurance Amount"),
  meal_allowance: Yup.number().required("Please input Meal Allowance"),
  basic_salary: Yup.number().required("Please input Basic Salary"),
  audit_salary: Yup.number().required("Please input Basic Salary (Audit)"),
  card_number: Yup.string(),
  mother_name: Yup.string(),
  pob: Yup.string(),
  home_address_1: Yup.string(),
  home_address_2: Yup.string(),
  mobile_no: Yup.string(),
  tel_no: Yup.string(),
  marriage_id: Yup.number(),
  bank_account_no: Yup.string(),
  bank_name: Yup.string(),
  family_card_number: Yup.string(),
  safety_insurance_no: Yup.string(),
  health_insurance_no: Yup.string(),
  department_id: Yup.number(),
  position_id: Yup.number(),
  shift: Yup.string(),
  entitle_ot: Yup.string(),
  meal_allowance_paid: Yup.string(),
  operational_allowance_paid: Yup.string(),
  attendance_allowance_paid: Yup.string(),
  grade_id: Yup.number(),
  remark: Yup.string(),
  benefits: Yup.array(),
  account_user_id: Yup.string(),
  education_background: Yup.string(),
  emergency_name: Yup.string(),
  emergency_relationship: Yup.string(),
  emergency_contract: Yup.string(),
});
