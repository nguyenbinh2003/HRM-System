import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { toast } from "react-toastify";
import Grid from "@mui/material/Unstable_Grid2";
import { FormHelperText, Paper, Typography } from "@mui/material";
import { MoonLoader } from "react-spinners";
import { useState } from "react";

import { forgotSchema } from "@/src/utils/formSchema";
import AuthService from "@/src/services/auth/authServices";
import checkCircle from "@/src/assets/check-circle.png";
import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";
import { Box } from "@mui/system";

const AuthServices = new AuthService();

export default function ForgotForm() {
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);

  const handleSubmit = async (data: object) => {
    setIsSendEmail(true);
    const forgot = await AuthServices.forgotPassword(data);
    if (forgot.status < 400) {
      toast.success("We have sent you the OTP code, please check your email.", {
        icon: () => <img src={checkCircle} alt="" />,
        style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
        hideProgressBar: true,
      });
    } else {
      toast.error("Please try again with an valid email address.", {
        icon: () => <BiError size={20} />,
        style: {
          background: "#FFEFEF",
          color: "#E5484D",
          fontSize: "13px",
        },
        hideProgressBar: true,
      });
    }
    setIsSendEmail(false);
    return;
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={forgotSchema}
    >
      {({ errors, touched }) => (
        <Paper
          elevation={0}
          sx={{
            borderRadius: "12px",
            padding: "24px",
            width: "100%",
            maxWidth: "348px",

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
                  <Typography variant="body1">Email</Typography>
                </Grid>
                <Grid md={12}>
                  <CustomFieldText
                    name="email"
                    type="text"
                    fullWidth
                    variant="filled"
                    sx={{
                      "& .MuiInputBase-input": {
                        border:
                          errors.email &&
                          touched.email &&
                          "1px solid rgb(243, 174, 175)",
                        borderRadius: "6px",
                        backgroundColor:
                          errors.email &&
                          touched.email &&
                          "rgb(255, 239, 239) !important",
                      },
                    }}
                  />
                  {errors.email && touched.email && (
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
                      {errors.email}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <div className="mt-3 d-flex align-items-center flex-column">
              <Box
                sx={{
                  width: "100%",
                  "& .MuiButtonBase-root:hover": {
                    backgroundColor: "rgb(0, 129, 241)",
                    boxShadow: "none",
                  },
                }}
              >
                <Button
                  disabled={isSendEmail}
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
                  {isSendEmail ? (
                    <MoonLoader color="#FBFDFF" size={20} />
                  ) : (
                    "Confirm & Send OTP"
                  )}
                </Button>
              </Box>

              <Link to={"/auth/sign-in"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    margin: "16px 0px 0px",
                  }}
                >
                  Back To Sign In
                </Typography>
              </Link>
            </div>
          </Form>
        </Paper>
      )}
    </Formik>
  );
}
