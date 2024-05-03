import { Form, Formik } from "formik";
import { Button, FormHelperText, IconButton, Typography } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Grid from "@mui/material/Unstable_Grid2";
import { toast } from "react-toastify";
import { Box } from "@mui/system";
import { SetStateAction, useState } from "react";
import { BiError } from "react-icons/bi";
import { MoonLoader } from "react-spinners";
import { AxiosResponse } from "axios";

import { changePasswordSchema } from "@/src/utils/formSchema";
import AuthServices from "@/src/services/auth/authServices";
import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";
import checkCircle from "@/src/assets/check-circle.png";

const AuthService = new AuthServices();

const handleSubmit = async (data: object, setSubmit: SetStateAction<any>) => {
  setSubmit(true);

  const reset: AxiosResponse<any> = await AuthService.resetPassword(data);
  if (reset.status < 400) {
    toast.success("Success", {
      icon: () => <img src={checkCircle} alt="" />,
      style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
      hideProgressBar: true,
    });
  } else if (reset.status === 422) {
    toast.error("Must input password between 8-16 characters", {
      icon: () => <BiError size={20} />,
      style: {
        background: "#FFEFEF",
        color: "#E5484D",
        fontSize: "13px",
      },
      hideProgressBar: true,
    });
  } else {
    toast.error("Unsuccess", {
      icon: () => <BiError size={20} />,
      style: {
        background: "#FFEFEF",
        color: "#E5484D",
        fontSize: "13px",
      },
      hideProgressBar: true,
    });
  }
  setSubmit(false);
  return;
};

export default function ResetPasswordForm() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
      }}
      validationSchema={changePasswordSchema}
      onSubmit={(values) => {
        handleSubmit(values, setIsSubmit);
      }}
    >
      {({ values, errors, touched }) => (
        <Box
          sx={{
            margin: "0 12px",
            paddingBottom: "12px",
            borderRadius: "12px",
            maxWidth: "272px",
            width: "100%",
            boxSizing: "border-box",
            "& .MuiTypography-root": {
              fontFamily: '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
              fontSize: "16px",
              letterSpacing: "-0.01em",
              paddingBottom: "7px",
            },

            "& .MuiFormControl-root": {
              width: "100%",
            },

            "& .MuiInputBase-root": {
              paddingRight: "0",
              fontFamily: '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
              overflow: "hidden",
              color: "rgb(17, 24, 28)",
              backgroundColor: "rgb(241, 243, 245)",
              borderRadius: "6px",
            },

            "& .MuiInputBase-root::after": {
              display: "none",
            },
            "& .MuiInputBase-root::before": {
              display: "none",
            },

            "& .MuiInputBase-input": {
              border: "auto",
              color: "currentcolor",
              padding: "12px",
            },

            "& .css-1lgzkzz-MuiTypography-root:hover": {
              color: "rgb(0, 145, 255) !important",
              textDecoration: "underline !important",
            },
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Grid container spacing={1}>
              <Grid sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={12}>
                  <Typography variant="body1">New Password</Typography>
                </Grid>
                <Grid md={12}>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <CustomFieldText
                      name="password"
                      type={isShowPassword ? "text" : "password"}
                      fullWidth
                      variant="filled"
                      sx={{
                        "& .MuiInputBase-input": {
                          border:
                            errors.password &&
                            touched.password &&
                            "1px solid rgb(243, 174, 175)",
                          borderRadius:
                            errors.password && touched.password && "6px",
                          backgroundColor:
                            errors.password &&
                            touched.password &&
                            "rgb(255, 239, 239) !important",
                        },
                      }}
                    />
                    {errors.password && touched.password && (
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
                        {errors.password}
                      </FormHelperText>
                    )}
                    {!!values.password ? (
                      <IconButton
                        sx={{
                          background: "transparent",
                          position: "absolute",
                          top: "7px",
                          right: 0,
                          color: "#1d1d1e",
                          transition: ".3s",
                        }}
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        {isShowPassword ? (
                          <FaRegEyeSlash size={18} />
                        ) : (
                          <FaRegEye size={18} />
                        )}
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={12}>
                  <Typography variant="body1">Confirm Password</Typography>
                </Grid>
                <Grid md={12}>
                  <CustomFieldText
                    name="password_confirmation"
                    type={isShowPassword ? "text" : "password"}
                    fullWidth
                    variant="filled"
                    sx={{
                      "& .MuiInputBase-input": {
                        border:
                          errors.password_confirmation &&
                          touched.password_confirmation &&
                          "1px solid rgb(243, 174, 175)",
                        borderRadius:
                          errors.password_confirmation &&
                          touched.password_confirmation &&
                          "6px",
                        backgroundColor:
                          errors.password_confirmation &&
                          touched.password_confirmation &&
                          "rgb(255, 239, 239) !important",
                      },
                    }}
                  />

                  {errors.password_confirmation &&
                    touched.password_confirmation && (
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
                        {errors.password_confirmation}
                      </FormHelperText>
                    )}
                </Grid>
              </Grid>
            </Grid>

            <div className="mt-3 d-flex align-items-center flex-column">
              <Box
                sx={{
                  width: "100%",
                  "& .css-gwp3ok-MuiButtonBase-root-MuiButton-root:hover": {
                    backgroundColor: "rgb(0, 129, 241)",
                    boxShadow: "none",
                  },
                }}
              >
                <Button
                  disabled={isSubmit}
                  fullWidth
                  variant="contained"
                  type="submit"
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
                  {isSubmit ? (
                    <MoonLoader color="#FBFDFF" size={20} />
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </Box>
            </div>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
