import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import { Paper } from "@mui/material";
import classNames from "classnames/bind";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BiError } from "react-icons/bi";

import styles from "./FormEmployee.module.scss";
import CustomTabPanel from "./customTabPanel/CustomTabPanel";
import HeaderTabPanel from "./headerTabPanel/HeaderTabPanel";
import FormPersonalInformation from "./formPersonalInformation/FormPersonalInformation";
import { employeeSchema } from "@/src/utils/formSchema";
import FormContractInformation from "./formContractInformation/FormContractInformation";
import FormEmploymentDetails from "./formEmploymentDetails/FormEmploymentDetails";
import { IconError } from "@/src/components/icons/icons";
import EmployeeServices from "@/src/services/employee/employeeServices";
import FormSalaryAndWages from "./formSalaryAndWages/FormSalaryAndWages";
import GradeServices from "@/src/services/grade/gradeServices";
import BenefitServices from "@/src/services/benefit/benefitServices";
import DepartmentServices from "@/src/services/department/departmentServices";
import MarriageServices from "@/src/services/marriage/marriageServices";
import PositionServices from "@/src/services/position/positionServices";
import FormOthers from "./formOthers/FormOthers";
import checkCircle from "@/src/assets/check-circle.png";

const MarriageService = new MarriageServices();
const GradeService = new GradeServices();
const DepartmentService = new DepartmentServices();
const BenefitService = new BenefitServices();
const PositionService = new PositionServices();
const EmployeeService = new EmployeeServices();
const cx = classNames.bind(styles);

function indexProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const requiredFields = [
  "name",
  "gender",
  "dob",
  "ktp_no",
  "contract_start_date",
  "type",
  "safety_insurance",
  "health_insurance",
  "meal_allowance",
  "basic_salary",
  "audit_salary",
];

const handleCheckField = (
  requiredFields: any,
  values: object,
  errors: object
) => {
  const checkRequiredFields =
    Object.keys(errors).length === 0 &&
    Object.entries(values)
      .filter(([key, value]) => {
        return requiredFields.includes(key);
      })
      .every(([key, value]) => {
        return value === 0 ? true : !!value;
      });

  return checkRequiredFields;
};

const handleAddNewEmployee = async (
  values: object,
  navigate: NavigateFunction,
  setIsSubmitting: React.SetStateAction<any>
) => {
  setIsSubmitting(true);
  const add = await EmployeeService.addNewEmployee(values);

  if (add.status < 400) {
    navigate("/employee");
    toast.success("Record added", {
      icon: () => <img src={checkCircle} alt="" />,
      style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
      hideProgressBar: true,
    });
  } else {
    toast.error("Can't record added", {
      icon: () => <BiError size={20} />,
      style: {
        background: "#FFEFEF",
        color: "#E5484D",
        fontSize: "13px",
      },
      hideProgressBar: true,
    });
  }
  setIsSubmitting(false);

  return;
};

const handleUpdateEmployee = async (
  id: number,
  data: object,
  navigate: NavigateFunction,
  setIsSubmitting: React.SetStateAction<any>
) => {
  setIsSubmitting(true);
  const update = await EmployeeService.updateEmployee(id, data);

  if (update.status < 400) {
    navigate("/employee");
    toast.success("Change saved", {
      icon: () => <img src={checkCircle} alt="" />,
      style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
      hideProgressBar: true,
    });
  } else {
    toast.error("Can't change saved", {
      icon: () => <BiError size={20} />,
      style: {
        background: "#FFEFEF",
        color: "#E5484D",
        fontSize: "13px",
      },
      hideProgressBar: true,
    });
  }
  setIsSubmitting(false);
  return;
};

export default function FormEmployee({
  formikRef,
  setIsSubmitting,
  setIsSubmitButton,
  initialValues,
}: {
  formikRef: any;
  initialValues: object;
  setIsSubmitting: React.SetStateAction<any>;
  setIsSubmitButton: React.SetStateAction<any>;
}) {
  const [value, setValue] = React.useState(0);
  const [marriageList, setMarriageList] = React.useState([]);
  const [positionList, setPositionList] = React.useState([]);
  const [gradeList, setGradeList] = React.useState([]);
  const [benefitList, setBenefitList] = React.useState([]);
  const [departmentList, setDepartmentList] = React.useState([]);
  const navigate: NavigateFunction = useNavigate();
  const { idEmployee } = useParams();

  const handleGetMarriage = async () => {
    const marriageList = await MarriageService.getMarriage();

    if (marriageList.status < 400) {
      const marriageItems = marriageList?.data?.data.map((item: any) => {
        return {
          value: item.id,
          content: item.name,
        };
      });
      setMarriageList(marriageItems);
    }
    return;
  };
  const handleGetPosition = async () => {
    const positionList = await PositionService.getPosition();

    if (positionList.status < 400) {
      const positionItems = positionList?.data?.data.map((item: any) => {
        return {
          value: item.id,
          content: item.name,
        };
      });
      setPositionList(positionItems);
    }
    return;
  };
  const handleGetDepartment = async () => {
    const departmentList = await DepartmentService.getDepartment();

    if (departmentList.status < 400) {
      const departmentItems = departmentList?.data?.data.map((item: any) => {
        return {
          value: item.id,
          content: item.name,
        };
      });
      setDepartmentList(departmentItems);
    }
    return;
  };
  const handleGetGrade = async () => {
    const gradeList = await GradeService.getGrade();

    if (gradeList.status < 400) {
      const gradeItems = gradeList?.data?.data.map((item: any) => {
        return {
          value: item.id,
          content: item.name,
        };
      });
      setGradeList(gradeItems);
    }
    return;
  };
  const handleGetBenefit = async () => {
    const benefitList = await BenefitService.getBenefit();

    if (benefitList.status < 400) {
      const benefitItems = benefitList?.data?.data.map((item: any) => {
        return {
          value: item.id,
          content: item.name,
        };
      });
      setBenefitList(benefitItems);
    }
    return;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    handleGetBenefit();
    handleGetGrade();
    handleGetMarriage();
    handleGetDepartment();
    handleGetPosition();
  }, []);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={employeeSchema}
      onSubmit={(values: any) => {
        console.log(values);
        !!idEmployee
          ? handleUpdateEmployee(
              Number(idEmployee),
              values,
              navigate,
              setIsSubmitting
            )
          : handleAddNewEmployee(values, navigate, setIsSubmitting);
        return;
      }}
    >
      {({ values, errors, touched }) => {
        React.useEffect(() => {
          const isCheck = handleCheckField(requiredFields, values, errors);
          setIsSubmitButton(!isCheck);
        }, [values, errors]);

        return (
          <Box
            sx={{
              width: "100%",
              fontFamily: '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
              "& .css-1gsv261": {
                border: "none",
              },
              "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.css-ee20y-MuiPaper-root":
                {
                  borderRadius: "12px",
                  padding: "10px",
                },
              "& .css-1pi8xg4-MuiGrid2-root": {
                alignItems: "center",
              },
              "& .MuiInputBase-input": {
                padding: "12px",
              },
              "& .MuiInputBase-root::after": {
                display: "none",
              },
              "& .MuiInputBase-root::before": {
                display: "none",
              },
              "& .MuiInputBase-root": {
                lineHeight: "1.4375em",
                fontSize: "16px",
                letterSpacing: "-0.01em",
                fontFamily:
                  '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                fontWeight: 400,
                color: "rgb(17, 24, 28)",
                boxSizing: "border-box",
                cursor: "text",
                display: "inline-flex",
                alignItems: "center",
                position: "relative",
                transition:
                  "background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                borderRadius: "6px",
                backgroundColor: "rgb(241, 243, 245)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .css-tx6wld-MuiGrid2-root": {
                padding: "4px",
              },
              "& .css-1jy87w0-MuiGrid2-root": {
                padding: "4px",
              },
              "& .MuiInputBase-input:-webkit-autofill": {
                borderRadius: "6px",
              },

              "& .MuiFormControl-root": {
                width: "100%",
              },
              "& .css-1flx28k-JoyTextarea-root:focus-within::before": {
                display: "none",
              },
              "& .css-16wq85-MuiGrid2-root": {
                padding: "4px",
              },
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "20px",
              },
              "& .MuiTab-root": {
                textTransform: "capitalize",
                textDecoration: "none",
                fontWeight: 400,
                lineHeight: 1.71429,
                fontSize: "14px",
                fontFamily:
                  '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                padding: "6px 16px",
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                color: "rgb(0, 145, 255)",
                boxShadow: "none",
                borderRadius: "6px",
                minHeight: "42px",
                backgroundColor: "rgb(237, 246, 255)",
                minWidth: "175px",
                display: "inline-flex",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTab-root:hover": {
                backgroundColor: "rgba(0, 145, 255, 0.08)",
              },
              "& .MuiDataGrid-row.Mui-selected": {
                padding: "10px",
                backgroundColor: "rgb(233, 249, 238)",
              },
              "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected":
                {
                  backgroundColor: "rgb(0, 145, 255)",
                  color: "white",
                },
              "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected:hover":
                {
                  backgroundColor: "rgb(0, 129, 241)",
                  color: "rgb(251, 253, 255)",
                },
              "& .css-10o2lyd-MuiStack-root>.MuiTextField-root": {
                minWidth: "auto",
              },
              "& .MuiStack-root": {
                overflow: "hidden",
              },
              "& .MuiSelect-select": {
                padding: "12px",
              },
              "& .css-ahj2mt-MuiTypography-root": {
                fontFamily:
                  '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
              },
              "& .css-bh6rcr-MuiGrid2-root": {
                padding: "0 4px",
              },
            }}
          >
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="add new employee tabs"
                sx={{
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_1":
                    {
                      backgroundColor:
                        errors.name ||
                        errors.dob ||
                        errors.gender ||
                        errors.ktp_no
                          ? "rgb(229, 72, 77)"
                          : "",
                      color:
                        errors.name ||
                        errors.dob ||
                        errors.gender ||
                        errors.ktp_no
                          ? "rgb(255, 239, 239)"
                          : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_1":
                    {
                      backgroundColor:
                        errors.name ||
                        errors.dob ||
                        errors.gender ||
                        errors.ktp_no
                          ? "rgb(255, 239, 239)"
                          : "",
                      color:
                        errors.name ||
                        errors.dob ||
                        errors.gender ||
                        errors.ktp_no
                          ? "rgb(229, 72, 77)"
                          : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_2":
                    {
                      backgroundColor:
                        errors.type || errors.contract_start_date
                          ? "rgb(229, 72, 77)"
                          : "",
                      color:
                        errors.type || errors.contract_start_date
                          ? "rgb(255, 239, 239)"
                          : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_2":
                    {
                      backgroundColor:
                        errors.type || errors.contract_start_date
                          ? "rgb(255, 239, 239)"
                          : "",
                      color:
                        errors.type || errors.contract_start_date
                          ? "rgb(229, 72, 77)"
                          : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_3":
                    {
                      backgroundColor:
                        errors.basic_salary ||
                        errors.audit_salary ||
                        errors.safety_insurance ||
                        errors.health_insurance ||
                        errors.meal_allowance
                          ? "rgb(229, 72, 77)"
                          : "",
                      color:
                        errors.basic_salary ||
                        errors.audit_salary ||
                        errors.safety_insurance ||
                        errors.health_insurance ||
                        errors.meal_allowance
                          ? "rgb(255, 239, 239)"
                          : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_3":
                    {
                      backgroundColor:
                        errors.basic_salary ||
                        errors.audit_salary ||
                        errors.safety_insurance ||
                        errors.health_insurance ||
                        errors.meal_allowance
                          ? "rgb(255, 239, 239)"
                          : "",
                      color:
                        errors.basic_salary ||
                        errors.audit_salary ||
                        errors.safety_insurance ||
                        errors.health_insurance ||
                        errors.meal_allowance
                          ? "rgb(229, 72, 77)"
                          : "",
                    },
                }}
              >
                <Tab
                  label="Employee Information"
                  {...indexProps(0)}
                  className="tab_1"
                  icon={
                    errors?.name ||
                    errors?.gender ||
                    errors?.dob ||
                    errors?.ktp_no ? (
                      <IconError />
                    ) : (
                      ""
                    )
                  }
                  iconPosition="end"
                  sx={{}}
                />
                <Tab
                  label="Contract Information"
                  {...indexProps(1)}
                  className="tab_2"
                  icon={
                    errors?.contract_start_date || errors?.type ? (
                      <IconError />
                    ) : (
                      ""
                    )
                  }
                  iconPosition="end"
                  sx={{}}
                />
                <Tab label="Employment Details" {...indexProps(2)} icon={""} />
                <Tab
                  label="Salary & Wages"
                  {...indexProps(3)}
                  className="tab_3"
                  icon={
                    errors?.basic_salary ||
                    errors?.audit_salary ||
                    errors?.safety_insurance ||
                    errors?.health_insurance ||
                    errors?.meal_allowance ? (
                      <IconError />
                    ) : (
                      ""
                    )
                  }
                  iconPosition="end"
                />
                <Tab label="Others" {...indexProps(4)} icon={""} />
              </Tabs>
            </Box>
            <Paper elevation={0}>
              <Form className={cx("css-1beu6n4")} id="employee-form">
                <CustomTabPanel value={value} index={0}>
                  <HeaderTabPanel title="Personal Information" required />
                  <FormPersonalInformation
                    errors={errors}
                    touched={touched}
                    marriageItems={marriageList}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <HeaderTabPanel title="Contract Information" required />
                  <FormContractInformation errors={errors} touched={touched} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <HeaderTabPanel title="Employment Details" />
                  <FormEmploymentDetails
                    departmentItems={departmentList}
                    positionItems={positionList}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <HeaderTabPanel title="Salary & Wages" />
                  <FormSalaryAndWages errors={errors} touched={touched} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <HeaderTabPanel title="Others" />
                  <FormOthers
                    gradeItems={gradeList}
                    benefitItems={benefitList}
                  />
                </CustomTabPanel>
              </Form>
            </Paper>
          </Box>
        );
      }}
    </Formik>
  );
}
