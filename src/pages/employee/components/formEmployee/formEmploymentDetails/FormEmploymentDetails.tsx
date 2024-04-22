import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormikContext } from "formik";
import { ChangeEvent } from "react";

export default function FormEmploymentDetails({
  positionItems,
  departmentItems,
}: {
  positionItems: object[];
  departmentItems: object[];
}) {
  const formik: any = useFormikContext();

  const positionCopy = [...positionItems];
  const departmentCopy = [...departmentItems];

  const handleFindContentPosition = (value: number) => {
    const position: any = positionCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!position) {
      return position.content;
    }
    return "";
  };
  const handleFindContentDepartment = (value: number) => {
    const department: any = departmentCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!department) {
      return department.content;
    }
    return "";
  };

  return (
    <Box
      sx={{
        margin: "0 20px 20px",
        maxWidth: "560px",
        display: "flex",
        flexFlow: "column wrap",
        gap: "10px",

        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
          color: "rgb(48, 164, 108)",
        },
        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-disabled": {
          color: "rgb(0 0 0 / 26%)",
        },
      }}
    >
      <Grid container spacing={1}>
        <Grid container sx={{ alignItems: "center", width: "100%" }}>
          <Grid md={5}>
            <Typography variant="body1">Department</Typography>
          </Grid>
          <Grid md={7}>
            <FormControl>
              <CustomSelectField
                name="department_id"
                menuItems={departmentItems}
                renderValue={(selected: any) => {
                  if (selected.length === 0) {
                    return (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgb(104, 112, 118)",
                          fontSize: "16px",
                          fontFamily:
                            '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                        }}
                      >
                        Choose Department
                      </Typography>
                    );
                  }
                  return handleFindContentDepartment(selected);
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid container sx={{ alignItems: "center", width: "100%" }}>
          <Grid md={5}>
            <Typography variant="body1">Position</Typography>
          </Grid>
          <Grid md={7}>
            <FormControl>
              <CustomSelectField
                name="position_id"
                menuItems={positionItems}
                renderValue={(selected: any) => {
                  if (selected.length === 0) {
                    return (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgb(104, 112, 118)",
                          fontSize: "16px",
                          fontFamily:
                            '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                        }}
                      >
                        Choose Position
                      </Typography>
                    );
                  }
                  return handleFindContentPosition(selected);
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            checked={formik.values?.hidden_on_payroll === "1" ? true : false}
          />
        }
        onChange={(e: ChangeEvent<any>): void => {
          formik.setFieldValue(
            "hidden_on_payroll",
            e.target?.checked ? "1" : "0"
          );
        }}
        label="Hidden on payroll"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formik.values?.entitle_ot === "1" ? true : false}
          />
        }
        onChange={(e: ChangeEvent<any>): void => {
          formik.setFieldValue("entitle_ot", e.target?.checked ? "1" : "0");
        }}
        label="Entitled OT"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formik.values?.meal_allowance_paid === "1" ? true : false}
          />
        }
        onChange={(e: ChangeEvent<any>): void => {
          formik.setFieldValue(
            "meal_allowance_paid",
            e.target?.checked ? "1" : "0"
          );
        }}
        label="Meal Allowance Paid"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked disabled />}
        label="Operational Allowance Paid"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked disabled />}
        label="Attendance Allowance Paid"
      />
    </Box>
  );
}
