import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CustomDateField from "@/src/components/customDateField/CustomDateField";
import CustomFieldText from "@/src/components/customFieldText/CustomFieldText";
import { HiOutlineUpload } from "react-icons/hi";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const menuItemEmployee = [
  { value: 0, content: "Permanent" },
  { value: 1, content: "Part-time worker" },
  { value: 2, content: "Contract worker" },
];

export default function FormContractInformation({
  errors,
  touched,
}: {
  errors: any;
  touched: any;
}) {
  const handleFindContentType = (value: number) => {
    const type: any = menuItemEmployee.find((item: any) => {
      return item.value === Number(value);
    });
    if (!!type) {
      return type.content;
    }
    return "";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Grid container>
            <Grid md={4}>
              <Typography variant="body1">
                Date Start
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
            <Grid md={8}>
              <FormControl>
                <CustomDateField
                  name="contract_start_date"
                  sx={{
                    border:
                      errors.contract_start_date &&
                      touched.contract_start_date &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius:
                      errors.contract_start_date &&
                      touched.contract_start_date &&
                      "6px",
                    "& .MuiInputBase-root": {
                      backgroundColor:
                        errors.contract_start_date &&
                        touched.contract_start_date &&
                        "rgb(255, 239, 239)",
                    },
                  }}
                />
              </FormControl>
              {errors.contract_start_date && touched.contract_start_date && (
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
                  {errors.contract_start_date}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid md={4}>
              <Typography variant="body1">
                Employee Type
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
            <Grid md={8}>
              <FormControl>
                <CustomSelectField
                  name="type"
                  menuItems={menuItemEmployee}
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
                          Choose Type
                        </Typography>
                      );
                    } else {
                      return handleFindContentType(selected);
                    }
                  }}
                  sx={{
                    border:
                      errors.type &&
                      touched.type &&
                      "1px solid rgb(243, 174, 175)",
                    borderRadius: errors.type && touched.type && "6px",
                    backgroundColor:
                      errors.type &&
                      touched.type &&
                      "rgb(255, 239, 239) !important",
                  }}
                />
              </FormControl>
              {errors.type && touched.type && (
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
                  {errors.type}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          Contract
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "8px",
            }}
          >
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid md={4}>
                  <Typography variant="body1">Contract Date From:</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomDateField />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid md={4}>
                  <Typography variant="body1">to:</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomDateField />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          Extension Contract
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "8px",
            }}
          >
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid md={4}>
                  <Typography variant="body1">Contract Date From:</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomDateField />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid md={4}>
                  <Typography variant="body1">to:</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomDateField />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "6px",
          border: "1px solid rgb(223, 227, 230)",
        }}
      >
        <Typography
          variant="caption"
          display="block"
          sx={{
            margin: "0px",
            lineHeight: 1.5,
            fontSize: "12px",
            fontFamily: '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
            color: "rgb(104, 112, 118)",
            fontWeight: 600,
            backgroundColor: "rgb(241, 243, 245)",
            padding: "5px 20px",
          }}
        >
          CONTRACT:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: 0,
            lineHeight: 1.35714,
            fontSize: "14px",
            fontFamily: '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
            fontWeight: 400,
            color: "rgb(104, 112, 118)",
            padding: "10px 20px",
          }}
        >
          Please upload pdf, png, xlsx, docx file format!
        </Typography>

        <Divider
          sx={{
            borderColor: "rgb(103 147 162)",
          }}
        />

        <Stack
          sx={{
            flexDirection: "row",
            gap: "20px",
            padding: "20px 14px 30px 20px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "380px",
              gap: "10px",
              flex: "1 1 0%",
            }}
          >
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={4}>
                  <Typography variant="body1">Contract Date</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomDateField />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid container sx={{ alignItems: "center", width: "100%" }}>
                <Grid md={4}>
                  <Typography variant="body1">Contract Name</Typography>
                </Grid>
                <Grid md={8}>
                  <FormControl>
                    <CustomFieldText value="" fullWidth />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Stack
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "12px",
                justifyContent: "space-between",
                paddingRight: "8px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  "& .MuiButton-root:hover": {
                    textDecoration: "none",
                    backgroundColor: "rgba(0, 145, 255, 0.08)",
                    boxShadow: "none",
                  },
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  fullWidth
                  startIcon={<HiOutlineUpload size={17} />}
                  sx={{
                    fontFamily:
                      '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                    padding: "8px 11px",
                    color: "rgb(0, 145, 255)",
                    border: "1px dashed rgb(0, 145, 255)",
                    height: "48px",
                    fontSize: "16px",
                    minWidth: "195px",
                    textTransform: "capitalize",
                    backgroundColor: "rgb(237, 246, 255)",
                    boxShadow: "none",
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*,.pdf,.csv,.xlsx,.docx"
                    multiple
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  "& .MuiButton-root:hover": {
                    textDecoration: "none",
                    backgroundColor: "rgb(54, 215, 180)",
                    boxShadow: "none",
                  },
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    padding: "8px 11px",
                    textTransform: "capitalize",
                    height: "48px",
                    fontSize: "16px",
                    minWidth: "195px",
                    backgroundColor: "rgb(105, 217, 193)",
                    boxShadow: "none",
                    fontFamily:
                      '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                  }}
                >
                  Add
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ border: "1px solid rgb(103 147 162)" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1 0%",
            }}
          >
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                maxHeight: "225px",
                minHeight: "225px",
                "& .MuiTableRow-root": {
                  outline: 0,
                },
                "& .MuiTableCell-root": {
                  lineHeight: "1.5rem",
                  fontSize: "14px",
                  fontFamily:
                    '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                  fontWeight: 600,
                  color: "rgb(17, 24, 28)",
                  border: "1px solid white",
                  minWidth: "50px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "0px",
                  padding: "3px 10px !important",
                  backgroundColor: "rgb(236, 238, 240) !important",
                },
              }}
            >
              <Table sx={{}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">No</TableCell>
                    <TableCell align="center">Contract Name</TableCell>
                    <TableCell align="center">Sign Date</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
