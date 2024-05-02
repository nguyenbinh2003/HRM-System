import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";
import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const items = [
  {
    label: "Basic Salary",
    name: "basic_salary",
    type: "number",
    inputAdornment: "Rp",
  },
  {
    label: "Basic Salary (Audit)",
    name: "audit_salary",
    type: "number",
    inputAdornment: "Rp",
  },
  {
    label: "Safety Insurance Amount",
    name: "safety_insurance",
    type: "number",
    inputAdornment: "Rp",
  },
  {
    label: "Healthy Insurance Amount",
    name: "health_insurance",
    type: "number",
    inputAdornment: "Rp",
  },
  {
    label: "Meal Allowance",
    name: "meal_allowance",
    type: "number",
    inputAdornment: "Rp",
  },
];

export default function FormSalaryAndWages({
  errors,
  touched,
}: {
  errors: any;
  touched: any;
}) {
  return (
    <Box
      sx={{
        padding: "0 20px 20px",
        maxWidth: "680px",
      }}
    >
      {items.map((item, index) => (
        <Grid container spacing={1} key={index}>
          <Grid container sx={{ alignItems: "center", width: "100%" }}>
            <Grid md={5}>
              <Typography variant="body1">
                {item.label}
                <span
                  className=""
                  style={{
                    marginLeft: "3px",
                    color: "rgb(229, 72, 77)",
                    fontSize: "16px",
                  }}
                >
                  *
                </span>
              </Typography>
            </Grid>
            <Grid md={7}>
              <FormControl
                sx={{
                  "& .MuiInputBase-root": {
                    border:
                      errors[item.name] &&
                      touched[item.name] &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius:
                      errors[item.name] && touched[item.name] && "6px",
                    background:
                      errors[item.name] && touched[item.name]
                        ? "rgb(255, 239, 239)"
                        : "",
                  },
                }}
              >
                <CustomFieldText
                  name={item.name}
                  type={item.type}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          "& .MuiTypography-root": {
                            color: "rgb(0, 106, 220)",
                            fontSize: "16px",
                          },
                        }}
                      >
                        {item.inputAdornment}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              {errors[item.name] && touched[item.name] && (
                <FormHelperText
                  sx={{
                    color: "rgb(229, 72, 77)",
                    lineHeight: 1.5,
                    fontSize: "12px",
                    fontFamily:
                      '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                    fontWeight: 400,
                    textAlign: "left",
                    margin: "3px 14px 0px",
                  }}
                >
                  {errors[item.name]}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
