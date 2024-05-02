import { Box, Button } from "@mui/material";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { MoonLoader } from "react-spinners";

import styles from "./CreateOrUpdatePage.module.scss";
import FormEmployee from "@/src/pages/employee/createOrUpdate/formEmployee/FormEmployee";
import EmployeeServices from "@/src/services/employee/employeeServices";
import { IEmployeeData } from "@/src/interfaces/formInterfaces";
import { AxiosResponse } from "axios";

const cx = classNames.bind(styles);
const EmployeeService = new EmployeeServices();

const initialValuesDefault: IEmployeeData = {
  name: "",
  gender: "",
  dob: "",
  ktp_no: "",
  nc_id: "",
  type: "",
  health_insurance: "",
  safety_insurance: "",
  meal_allowance: "",
  contract_start_date: "",
  basic_salary: "",
  audit_salary: "",
  hidden_on_payroll: "0",
  education_background: "",
  safety_insurance_no: "",
  card_number: "",
  mother_name: "",
  pob: "",
  home_address_1: "",
  home_address_2: "",
  mobile_no: "",
  tel_no: "",
  marriage_id: "",
  bank_account_no: "",
  bank_name: "",
  family_card_number: "",
  health_insurance_no: "",
  department_id: "",
  position_id: "",
  shift: "",
  entitle_ot: "",
  meal_allowance_paid: "",
  operational_allowance_paid: "",
  attendance_allowance_paid: "",
  grade_id: "",
  remark: "",
  benefits: [],
  account_user_id: "",
  emergency_name: "",
  emergency_relationship: "",
  emergency_contract: "",
  deleted_ids: [],
  documents: [],
};

const handleGetEmployeeDetail = async (
  id: number,
  setInitialValues: SetStateAction<any>
) => {
  const employee: AxiosResponse<any> = await EmployeeService.getEmployeeDetail(
    id
  );

  if (employee.status < 400) {
    const arrIntialKeys: string[] = Object.keys(initialValuesDefault);
    const benefits: number[] = employee.data.data.benefits?.map(
      (item: any) => item.id
    );

    const newData: { [k: string]: unknown } = Object.fromEntries(
      Object.entries(employee.data.data).filter(([key, _]) =>
        arrIntialKeys.includes(key)
      )
    );
    newData.benefits = benefits;
    newData.deleted_ids = [];
    const mapItemIsNull: any = [newData].map((item: any) => {
      const filteredObj: any = {};
      Object.entries(item).forEach(([key, value]) => {
        filteredObj[key] = value === null ? "" : value;
      });
      return filteredObj;
    });

    setInitialValues(...mapItemIsNull);
  }

  return;
};

const CreateOrUpdatePage = () => {
  const formikRef: any = useRef(null);
  const { idEmployee } = useParams<string>();
  const [initialValues, setInitialValues] = useState<IEmployeeData | object>(
    {}
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitButton, setIsSubmitButton] = useState<boolean>(true);

  const handleSubmit = () => {
    formikRef.current.handleSubmit();
  };

  useEffect(() => {
    if (!!idEmployee) {
      handleGetEmployeeDetail(Number(idEmployee), setInitialValues);
    } else {
      setInitialValues(initialValuesDefault);
    }
  }, []);

  return (
    <div style={{ marginLeft: "329px", overflowY: "hidden", width: "100%" }}>
      <Box
        sx={{
          maxWidth: "1170px",
          flex: "1 1 0%",
          margin: "30px 46px 0",
          "& .css-wyk6e1-MuiButtonBase-root-MuiButton-root:hover": {
            backgroundColor: "rgb(0, 129, 241)",
            boxShadow: "none",
          },
        }}
      >
        <div className={cx("nav")}>
          <nav className={cx("header")} aria-label="breadcrumb">
            <ol className={cx("parent-item")}>
              <li className={cx("item")}>
                <Link to="/employee" style={{ pointerEvents: "none" }}>
                  General
                </Link>
              </li>
              <li aria-hidden="true" className={cx("css-3mf706")}>
                ›
              </li>
              <li className={cx("item")}>
                <Link to="/employee" className="">
                  Employee Management
                </Link>
              </li>
              <li aria-hidden="true" className={cx("css-3mf706")}>
                ›
              </li>
              <li className={cx("item")}>
                <p className="">
                  {!!idEmployee ? "Edit employee" : "Add New Employee"}
                </p>
              </li>
            </ol>
          </nav>
          <div className={cx("css-17jua")}>
            <h3>Employee Management</h3>
            {isSubmitting ? (
              <Button
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  boxShadow: "none",
                  borderRadius: "6px",
                  padding: "8px 22px",
                  width: !!idEmployee ? "146px" : "76px",
                  height: "43px",
                }}
              >
                <MoonLoader color="#FBFDFF" size={20} />
              </Button>
            ) : (
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitButton}
                onClick={handleSubmit}
                sx={{
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
                  padding: "8px 22px",
                }}
              >
                {!!idEmployee ? "Save change" : "Add"}
              </Button>
            )}
          </div>
        </div>

        {Object.keys(initialValues).length > 0 && (
          <FormEmployee
            formikRef={formikRef}
            initialValues={initialValues}
            setIsSubmitButton={setIsSubmitButton}
            setIsSubmitting={setIsSubmitting}
          />
        )}
      </Box>
    </div>
  );
};

export default CreateOrUpdatePage;
