export interface IEmployeeData {
  name: string;
  gender: string;
  dob: string;
  ktp_no: string;
  nc_id: string;
  type: string;
  health_insurance: string;
  safety_insurance: string;
  meal_allowance: string;
  contract_start_date: string;
  basic_salary: string;
  audit_salary: string;
  hidden_on_payroll: string;
  education_background: string;
  safety_insurance_no: string;
  card_number: string;
  mother_name: string;
  pob: string;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: string;
  marriage_id: string;
  bank_account_no: string;
  bank_name: string;
  family_card_number: string;
  health_insurance_no: string;
  department_id: string;
  position_id: string;
  shift: string;
  entitle_ot: string;
  meal_allowance_paid: string;
  operational_allowance_paid: string;
  attendance_allowance_paid: string;
  grade_id: string;
  remark: string;
  benefits: any[];
  account_user_id: string;
  emergency_name: string;
  emergency_relationship: string;
  emergency_contract: string;
  deleted_ids: any[];
  documents: any[];
}

export interface IMarriageList {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: number;
  updated_at: number;
}

export interface IPositionList {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IGradeList {
  id: number;
  name: string;
  prefix: string;
  company_id: number;
  created_at: string;
  updated_at: string;
  benefits: [];
}

export interface IBenefitList {
  id: number;
  name: string;
  code: string;
  type: number;
  value: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IDepartmentList {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IGenderItem {
  value: number;
  content: string;
}
