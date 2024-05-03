import {
  Box,
  Button,
  Chip,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormikContext } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { styled } from "@mui/system";
import { HiOutlineUpload } from "react-icons/hi";
import { RxTrash } from "react-icons/rx";

import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import { getFileNameFromURL, handleFormatDate } from "@/src/utils/utils";
import { IconDownload } from "@/src/components/icons/icons";

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

export default function FormOthers({
  benefitItems,
  gradeItems,
}: {
  benefitItems: object[];
  gradeItems: object[];
}) {
  const formik: any = useFormikContext();
  const { documents, deleted_ids } = formik.values;

  const benefitCopy: object[] = [...benefitItems];
  const gradeCopy: object[] = [...gradeItems];

  const handleFindContentBenefit = (value: number) => {
    const benefit: any = benefitCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!benefit) {
      return benefit.content;
    }
    return "";
  };
  const handleFindContentGrade = (value: number) => {
    const grade: any = gradeCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!grade) {
      return grade.content;
    }
    return "";
  };

  const handleOnChangeFile = (file: File) => {
    formik.setFieldValue("documents", [...documents, file]);
    return;
  };

  const handleDeleteItemBenefit = (value: number) => {
    const fieldBenefits: number[] = formik.values.benefits;

    const setFieldBenefits = fieldBenefits.filter((item: number) => {
      return item !== value;
    });

    return formik.setFieldValue("benefits", setFieldBenefits);
  };
  const handleDeleteFile = (item: any) => {
    if (item.id) {
      const newDocuments = documents.filter((file: any) => {
        return file.id !== item.id;
      });
      formik.setFieldValue("documents", newDocuments);
      formik.setFieldValue("deleted_ids", [...deleted_ids, item.id]);
    } else {
      const newDocuments = documents.filter((file: File) => {
        return file.name !== item.name;
      });
      formik.setFieldValue("documents", newDocuments);
    }
    return;
  };

  return (
    <>
      <Box
        sx={{
          padding: "0 20px",
          maxWidth: "560px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid container sx={{ alignItems: "center", width: "100%" }}>
            <Grid md={5}>
              <Typography variant="body1">Grade</Typography>
            </Grid>
            <Grid md={7}>
              <FormControl>
                <CustomSelectField
                  name="grade_id"
                  menuItems={gradeItems}
                  renderValue={(selected: number) => {
                    if (selected) {
                      return handleFindContentGrade(selected);
                    }
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container sx={{ alignItems: "center", width: "100%" }}>
            <Grid md={5}>
              <Typography variant="body1">Benefit</Typography>
            </Grid>
            <Grid md={7}>
              <FormControl>
                <CustomSelectField
                  name="benefits"
                  menuItems={benefitItems}
                  multiple
                  renderValue={(selected: number[]) => {
                    return (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value: number) => {
                          if (!!value) {
                            return (
                              <Chip
                                key={value}
                                label={handleFindContentBenefit(value)}
                                onDelete={() => {
                                  handleDeleteItemBenefit(value);
                                }}
                                deleteIcon={<AiOutlineClose size={15} />}
                                onMouseDown={(event) => {
                                  event.stopPropagation();
                                }}
                                sx={{
                                  borderRadius: "6px",
                                  margin: "3px",
                                  backgroundColor: "white",
                                  color: "rgb(0, 145, 255)",
                                }}
                              />
                            );
                          }
                          return;
                        })}
                      </Box>
                    );
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid rgb(223, 227, 230)",
        }}
      >
        <Box
          sx={{
            maxWidth: "560px",
            padding: "0 20px",
          }}
        >
          <Grid container spacing={1}>
            <Grid container sx={{ alignItems: "center", width: "100%" }}>
              <Grid md={5}>
                <Typography variant="body1">Document</Typography>
              </Grid>
              <Grid
                md={7}
                sx={{
                  margin: "16px 0",
                  "& .css-1rlb7rp-MuiButtonBase-root-MuiButton-root:hover": {
                    backgroundColor: "rgba(0, 145, 255, 0.08)",
                    textDecoration: "none",
                    boxShadow: "none",
                  },
                }}
              >
                <Button
                  component="label"
                  role={"button"}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={
                    <HiOutlineUpload size={15} style={{ marginLeft: "3px" }} />
                  }
                  sx={{
                    color: "rgb(0, 145, 255)",
                    boxShadow: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                    padding: "8px 12px",
                    backgroundColor: "rgb(237, 246, 255)",
                    minWidth: "98px",
                    border: "1px dashed",
                    height: "32px",
                    textTransform: "capitalize",
                    fontFamily:
                      '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput
                    onChange={(e: any) => {
                      console.log(e.target.files[0] instanceof File);
                      console.log(e.target.files[0]);

                      handleOnChangeFile(e.target.files[0]);
                    }}
                    type="file"
                    accept="image/*,.pdf,.csv,.xlsx,.docx"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "0 20px 20px 20px",
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
            }}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      lineHeight: "1.5rem",
                      fontSize: "14px",
                      fontFamily:
                        '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                      fontWeight: 600,
                      color: "rgb(17, 24, 28)",
                      border: "1px solid white",
                      minWidth: "50px",
                      padding: "3px 10px !important",
                      backgroundColor: "rgb(236, 238, 240) !important",
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    width={"7%"}
                    sx={{ borderTopLeftRadius: "8px" }}
                  >
                    No
                  </TableCell>
                  <TableCell align="center" width={"35%"}>
                    Document Name
                  </TableCell>
                  <TableCell align="center" width={"35%"}>
                    Created At
                  </TableCell>
                  <TableCell
                    align="center"
                    width={"28%"}
                    sx={{ borderTopRightRadius: "8px" }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  backgroundColor: "rgb(248, 249, 250)",
                  lineHeight: "1.5",
                  fontSize: "12px",
                  fontFamily:
                    '"SVN-Sofia Pro Regular", "Public Sans", sans-serif',
                  fontWeight: 400,
                  height: "33px",

                  "& .MuiTableCell-root": {
                    color: "rgb(104, 112, 118)",
                    border: "1px solid white",
                    minWidth: "50px",
                    padding: "3px 10px !important",
                  },
                }}
              >
                {!!documents
                  ? documents.map((item: any, index: number) => {
                      const date = new Date(
                        item.lastModifiedDate || item.created_at
                      );
                      return (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell>
                            {item.name || getFileNameFromURL(item.document)}
                          </TableCell>
                          <TableCell>{handleFormatDate(date)}</TableCell>

                          <TableCell
                            align="center"
                            sx={{
                              "& .icon-download:hover": {
                                backgroundColor: "rgb(48 164 108 / 8%)",
                              },
                            }}
                          >
                            {!!item.document ? (
                              <Button
                                component={"a"}
                                href={item.document}
                                download=""
                                className="icon-download"
                                aria-label="download"
                                color="success"
                                sx={{
                                  minWidth: "40px",
                                  backgroundColor: "rgb(233, 249, 238)",
                                }}
                              >
                                <IconDownload />
                              </Button>
                            ) : (
                              ""
                            )}
                            <Button
                              aria-label="delete"
                              color="error"
                              sx={{
                                minWidth: "40px",
                                backgroundColor: "rgb(255, 239, 239)",
                              }}
                              onClick={() => handleDeleteFile(item)}
                            >
                              <RxTrash size={15} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : ""}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
