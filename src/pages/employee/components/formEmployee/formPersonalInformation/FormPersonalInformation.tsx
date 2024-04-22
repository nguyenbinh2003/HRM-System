import { FormControl, FormHelperText, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Textarea from "@mui/joy/Textarea";

import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";
import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import CustomDateField from "@/src/components/customDateField/CustomDateField";

const menuGenderItems: object[] = [
  { value: 0, content: "Male" },
  { value: 1, content: "Female" },
];

export default function FormPersonalInformation({
  errors,
  touched,
  marriageItems,
}: {
  errors: any;
  touched: any;
  marriageItems: object[];
}) {
  const marriageCopy = [...marriageItems];
  const handleFindContentMarriage = (value: number) => {
    const marriage: any = marriageCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!marriage) {
      return marriage.content;
    }
    return "";
  };

  const handleFindContentGender = (value: number) => {
    const gender: any = menuGenderItems.find((item: any) => {
      return item.value === value;
    });
    if (!!gender) {
      return gender.content;
    }
    return "";
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        gap: "40px",
        marginTop: "10px",
        "& .MuiMenu-paper": {
          outline: 0,
          border: "1px solid rgb(223, 227, 230)",
          boxShadow: "none",
          maxHeight: "350px",
        },
        "@media (max-width: 900px)": {
          gap: 0,
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0%",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "10px",
        }}
      >
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">
              Name
              <span
                className=""
                style={{
                  color: "rgb(229, 72, 77)",
                  fontSize: "16px",
                }}
              >
                *
              </span>
            </Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText
                name="name"
                sx={{
                  "& .MuiInputBase-input": {
                    border:
                      errors.name &&
                      touched.name &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius: errors.name && touched.name && "6px",
                    backgroundColor:
                      errors.name &&
                      touched.name &&
                      "rgb(255, 239, 239) !important",
                  },
                }}
              />
            </FormControl>
            {errors.name && touched.name && (
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
                {errors.name}
              </FormHelperText>
            )}
          </Grid>
        </Grid>

        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">
              Gender
              <span
                className=""
                style={{
                  color: "rgb(229, 72, 77)",
                  fontSize: "16px",
                }}
              >
                *
              </span>
            </Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomSelectField
                name="gender"
                menuItems={menuGenderItems}
                renderValue={(selected: any) => {
                  if (!!selected) {
                    return (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgb(104, 112, 118)",
                          fontSize: "16px",
                        }}
                      >
                        Choose Gender
                      </Typography>
                    );
                  }
                  return handleFindContentGender(selected);
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    border:
                      errors.gender &&
                      touched.gender &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius: errors.gender && touched.gender && "6px",
                    backgroundColor:
                      errors.gender &&
                      touched.gender &&
                      "rgb(255, 239, 239) !important",
                  },
                }}
              />
            </FormControl>
            {errors.gender && touched.gender && (
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
                {errors.gender}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Mother Name</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="mother_name" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">
              Date of birth
              <span
                className=""
                style={{
                  color: "rgb(229, 72, 77)",
                  fontSize: "16px",
                }}
              >
                *
              </span>
            </Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomDateField
                name="dob"
                sx={{
                  border:
                    errors.dob && touched.dob && "1px solid rgb(243, 174, 175)",
                  borderRadius: errors.dob && touched.dob && "6px",
                  "& .MuiInputBase-root": {
                    backgroundColor:
                      errors.dob && touched.dob && "rgb(255, 239, 239)",
                  },
                }}
              />
            </FormControl>
            {errors.dob && touched.dob && (
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
                {errors.dob}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Place of birth</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="pob" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">
              KTP No.
              <span
                className=""
                style={{
                  color: "rgb(229, 72, 77)",
                  fontSize: "16px",
                }}
              >
                *
              </span>
            </Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText
                name="ktp_no"
                sx={{
                  "& .MuiInputBase-input": {
                    border:
                      errors.ktp_no &&
                      touched.ktp_no &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius: errors.ktp_no && touched.ktp_no && "6px",
                    backgroundColor:
                      errors.ktp_no &&
                      touched.ktp_no &&
                      "rgb(255, 239, 239) !important",
                  },
                }}
              />
            </FormControl>
            {errors.ktp_no && touched.ktp_no && (
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
                {errors.ktp_no}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Tax ID</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="nc_id" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Home Address 1</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="home_address_1" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Home Address 2</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="home_address_2" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Mobile No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="mobile_no" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Tel No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="tel_no" />
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0%",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "10px",
        }}
      >
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Marriage Status</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomSelectField
                name="marriage_id"
                placeholder="Choose Marriage Status"
                renderValue={(selected: any) => {
                  if (!!selected) {
                    return (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgb(104, 112, 118)",
                          fontSize: "16px",
                        }}
                      >
                        Choose Marriage Status
                      </Typography>
                    );
                  }
                  return handleFindContentMarriage(selected);
                }}
                menuItems={marriageItems}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Bank Card No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="card_number" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Bank Account No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="bank_account_no" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Bank Name</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="bank_name" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Family Card Number</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="family_card_number" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Safety Insurance No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="safety_insurance_no" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Health Insurance No.</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText name="health_insurance_no" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={4}>
            <Typography variant="body1">Education Background</Typography>
          </Grid>
          <Grid sm={8}>
            <FormControl>
              <CustomFieldText
                name="education_background"
                as={Textarea}
                minRows={2}
                size="lg"
                variant="soft"
                sx={{
                  "& .monica-writing-entry-btn-wrapper": {
                    display: "none !important ",
                  },
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={12}>
            <Typography variant="body1">Emergency Contact Info</Typography>
          </Grid>
          <Grid
            container
            sm={12}
            sx={{
              gap: "10px",
              border: "2px solid rgb(223, 227, 230)",
              borderRadius: "6px",
              padding: "8px",
              mt: 1,
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid sm={4}>
                <Typography variant="body1">Name</Typography>
              </Grid>
              <Grid sm={8}>
                <CustomFieldText name="emergency_name" />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid sm={4}>
                <Typography variant="body1">Relationship</Typography>
              </Grid>
              <Grid sm={8}>
                <CustomFieldText name="emergency_relationship" />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid sm={4}>
                <Typography variant="body1">Contact</Typography>
              </Grid>
              <Grid sm={8}>
                <CustomFieldText name="emergency_contract" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
