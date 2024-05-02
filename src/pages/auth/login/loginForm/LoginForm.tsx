import { Form, Formik } from "formik";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { BiError } from "react-icons/bi";
import { toast } from "react-toastify";
import Grid from "@mui/material/Unstable_Grid2";
import { FormHelperText, Paper, Typography } from "@mui/material";
import { MoonLoader } from "react-spinners";
import { Box } from "@mui/system";

import { loginSchema } from "@/src/utils/formSchema";
import AuthService from "@/src/services/auth/authServices";
import checkCircle from "@/src/assets/check-circle.png";
import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";

const AuthServices = new AuthService();

const factoryItems = [
  { value: 1, content: "SBM" },
  { value: 2, content: "DMF" },
];

const handleFindContentFactory = (value: number) => {
  const factory = factoryItems.find((item) => item.value === value);
  return factory?.content;
};

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = async (data: object) => {
    setIsSignIn(true);
    const login = await AuthServices.login(data);
    if (login.status < 400) {
      localStorage.setItem("user-token", login.data.data.token);
      toast.success("Sign in successfully.", {
        icon: () => <img src={checkCircle} alt="" />,
        style: { background: "#D9F3EE", color: "#12A594", fontSize: "13px" },
        hideProgressBar: true,
      });
      navigate("/employee");
    } else {
      toast.error(
        "Incorrect Username, Password or Factory. Please try again!",
        {
          icon: () => <BiError size={20} />,
          style: {
            background: "#FFEFEF",
            color: "#E5484D",
            fontSize: "13px",
          },
          hideProgressBar: true,
        }
      );
      setIsSignIn(false);
      return;
    }
  };
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        company_id: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Paper
          elevation={0}
          sx={{
            padding: "24px",
            borderRadius: "12px",
            maxWidth: "348px",
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
                  <Typography variant="body1">Username</Typography>
                </Grid>
                <Grid md={12}>
                  <CustomFieldText
                    name="username"
                    type="text"
                    fullWidth
                    variant="filled"
                    sx={{
                      "& .MuiInputBase-input": {
                        border:
                          errors.username &&
                          touched.username &&
                          "1px solid rgb(243, 174, 175)",
                        borderRadius:
                          errors.username && touched.username && "6px",
                        backgroundColor:
                          errors.username &&
                          touched.username &&
                          "rgb(255, 239, 239) !important",
                      },
                    }}
                  />
                  {errors.username && touched.username && (
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
                      {errors.username}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={12}>
                  <Typography variant="body1">Password</Typography>
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
                    {!!values.password ? (
                      <IconButton
                        className="border-0"
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
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={12}>
                  <Typography variant="body1">Factory</Typography>
                </Grid>
                <Grid md={12}>
                  <CustomSelectField
                    name="company_id"
                    menuItems={factoryItems}
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
                              paddingBottom: "0 !important",
                            }}
                          >
                            Select Factory
                          </Typography>
                        );
                      }
                      return handleFindContentFactory(selected);
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        border:
                          errors.company_id &&
                          touched.company_id &&
                          "1px solid rgb(243, 174, 175)",
                        borderRadius:
                          errors.company_id && touched.company_id && "6px",
                        backgroundColor:
                          errors.company_id &&
                          touched.company_id &&
                          "rgb(255, 239, 239) !important",
                      },
                    }}
                  />
                  {errors.company_id && touched.company_id && (
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
                      {errors.company_id}
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
                  disabled={isSignIn}
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
                  {isSignIn ? (
                    <MoonLoader color="#FBFDFF" size={20} />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Box>

              <Link
                style={{ textDecoration: "none" }}
                to={"/auth/forgot-password"}
              >
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: "14px",
                    margin: "16px 0px 0px",
                  }}
                >
                  Forgot Your Password ?
                </Typography>
              </Link>
            </div>
          </Form>
        </Paper>
      )}
    </Formik>
  );
}
