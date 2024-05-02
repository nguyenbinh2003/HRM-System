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
import {
  IBenefitList,
  IDepartmentList,
  IEmployeeData,
  IGradeList,
  IMarriageList,
  IPositionList,
} from "@/src/interfaces/formInterfaces";
import { AxiosResponse } from "axios";

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
  "nc_id",
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
      .filter(([key, _]) => {
        return requiredFields.includes(key);
      })
      .every(([_, value]) => {
        return value === 0 ? true : !!value;
      });
  return checkRequiredFields;
};

const handleAddNewEmployee = async (
  values: any,
  navigate: NavigateFunction,
  setIsSubmitting: React.SetStateAction<any>
) => {
  const { documents, deleted_ids, ...data } = values;
  setIsSubmitting(true);
  const add = await EmployeeService.addNewEmployee(data);

  if (add.status < 400) {
    await EmployeeService.uploadEmployeeDocs({
      employee_id: add.data.data.id,
      documents,
      deleted_ids,
    });
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
  values: any,
  navigate: NavigateFunction,
  setIsSubmitting: React.SetStateAction<any>
) => {
  const { documents, deleted_ids, ...data } = values;

  setIsSubmitting(true);
  const update = await EmployeeService.updateEmployee(id, data);

  if (update.status < 400) {
    await EmployeeService.uploadEmployeeDocs({
      employee_id: id,
      documents,
      deleted_ids,
    });
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
  initialValues: IEmployeeData | object;
  setIsSubmitting: React.SetStateAction<any>;
  setIsSubmitButton: React.SetStateAction<any>;
}) {
  const { idEmployee } = useParams();
  const navigate: NavigateFunction = useNavigate();
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [isErrorTabEmployeeInformation, setIsErrorTabEmployeeInformation] =
    React.useState(false);
  const [isErrorTabContractInformation, setIsErrorTabContractInformation] =
    React.useState(false);
  const [isErrorTabSalaryAndWages, setIsErrorTabSalaryAndWages] =
    React.useState(false);

  const [marriageList, setMarriageList] = React.useState<IMarriageList[]>([]);
  const [positionList, setPositionList] = React.useState<IPositionList[]>([]);
  const [gradeList, setGradeList] = React.useState<IGradeList[]>([]);
  const [benefitList, setBenefitList] = React.useState<IBenefitList[]>([]);
  const [departmentList, setDepartmentList] = React.useState<IDepartmentList[]>(
    []
  );

  const handleGetMarriage = async () => {
    const marriageList: AxiosResponse<any> =
      await MarriageService.getMarriage();

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
    const positionList: AxiosResponse<any> =
      await PositionService.getPosition();

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
    const departmentList: AxiosResponse<any> =
      await DepartmentService.getDepartment();

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
    const gradeList: AxiosResponse<any> = await GradeService.getGrade();

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
    const benefitList: AxiosResponse<any> = await BenefitService.getBenefit();

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

  const handleChangeTab = (newValue: number, values: IEmployeeData) => {
    const previousTab: number = activeTab;
    setActiveTab(newValue);

    switch (previousTab) {
      case 0:
        if (
          values.name === "" ||
          values.dob === "" ||
          values.gender === "" ||
          values.gender === null ||
          values.ktp_no === "" ||
          values.nc_id === ""
        ) {
          setIsErrorTabEmployeeInformation(true);
        } else {
          setIsErrorTabEmployeeInformation(false);
        }
        break;
      case 1:
        if (
          values.type === "" ||
          values.type === null ||
          values.contract_start_date === ""
        )
          setIsErrorTabContractInformation(true);
        else {
          setIsErrorTabContractInformation(false);
        }
        break;
      case 3:
        if (
          values.basic_salary === "" ||
          values.audit_salary === "" ||
          values.safety_insurance === "" ||
          values.health_insurance === "" ||
          values.meal_allowance === ""
        )
          setIsErrorTabSalaryAndWages(true);
        else {
          setIsErrorTabSalaryAndWages(false);
        }
        break;
      default:
        break;
    }
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
      validateOnChange={false}
      onSubmit={(values: any) => {
        if (!!idEmployee) {
          handleUpdateEmployee(
            Number(idEmployee),
            values,
            navigate,
            setIsSubmitting
          );
        } else {
          handleAddNewEmployee(values, navigate, setIsSubmitting);
        }
        return;
      }}
    >
      {({ values, errors, touched }) => {
        React.useEffect(() => {
          const isCheck: boolean = handleCheckField(
            requiredFields,
            values,
            errors
          );
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
                value={activeTab}
                onChange={(_, newValue) => handleChangeTab(newValue, values)}
                aria-label="add new employee tabs"
                sx={{
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_1":
                    {
                      backgroundColor: isErrorTabEmployeeInformation
                        ? "rgb(229, 72, 77)"
                        : "",
                      color: isErrorTabEmployeeInformation
                        ? "rgb(255, 239, 239)"
                        : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_1":
                    {
                      backgroundColor: isErrorTabEmployeeInformation
                        ? "rgb(255, 239, 239)"
                        : "",
                      color: isErrorTabEmployeeInformation
                        ? "rgb(229, 72, 77)"
                        : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_2":
                    {
                      backgroundColor: isErrorTabContractInformation
                        ? "rgb(229, 72, 77)"
                        : "",
                      color: isErrorTabContractInformation
                        ? "rgb(255, 239, 239)"
                        : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_2":
                    {
                      backgroundColor: isErrorTabContractInformation
                        ? "rgb(255, 239, 239)"
                        : "",
                      color: isErrorTabContractInformation
                        ? "rgb(229, 72, 77)"
                        : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.tab_3":
                    {
                      backgroundColor: isErrorTabSalaryAndWages
                        ? "rgb(229, 72, 77)"
                        : "",
                      color: isErrorTabSalaryAndWages
                        ? "rgb(255, 239, 239)"
                        : "",
                    },
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.tab_3":
                    {
                      backgroundColor: isErrorTabSalaryAndWages
                        ? "rgb(255, 239, 239)"
                        : "",
                      color: isErrorTabSalaryAndWages ? "rgb(229, 72, 77)" : "",
                    },
                }}
              >
                <Tab
                  label="Employee Information"
                  {...indexProps(0)}
                  className="tab_1"
                  icon={isErrorTabEmployeeInformation ? <IconError /> : ""}
                  iconPosition="end"
                  sx={{}}
                />
                <Tab
                  label="Contract Information"
                  {...indexProps(1)}
                  className="tab_2"
                  icon={isErrorTabContractInformation ? <IconError /> : ""}
                  iconPosition="end"
                  sx={{}}
                />
                <Tab label="Employment Details" {...indexProps(2)} icon={""} />
                <Tab
                  label="Salary & Wages"
                  {...indexProps(3)}
                  className="tab_3"
                  icon={isErrorTabSalaryAndWages ? <IconError /> : ""}
                  iconPosition="end"
                />
                <Tab label="Others" {...indexProps(4)} icon={""} />
              </Tabs>
            </Box>
            <Paper elevation={0}>
              <Form className={cx("css-1beu6n4")} id="employee-form">
                <CustomTabPanel value={activeTab} index={0}>
                  <HeaderTabPanel title="Personal Information" required />
                  <FormPersonalInformation
                    errors={errors}
                    touched={touched}
                    marriageItems={marriageList}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={activeTab} index={1}>
                  <HeaderTabPanel title="Contract Information" required />
                  <FormContractInformation errors={errors} touched={touched} />
                </CustomTabPanel>
                <CustomTabPanel value={activeTab} index={2}>
                  <HeaderTabPanel title="Employment Details" />
                  <FormEmploymentDetails
                    departmentItems={departmentList}
                    positionItems={positionList}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={activeTab} index={3}>
                  <HeaderTabPanel title="Salary & Wages" />
                  <FormSalaryAndWages errors={errors} touched={touched} />
                </CustomTabPanel>
                <CustomTabPanel value={activeTab} index={4}>
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
