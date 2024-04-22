import CustomSelectField from "@/src/components/customSelectField/CustomSelectField";
import { Box, Chip, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormikContext } from "formik";
import { AiOutlineClose } from "react-icons/ai";

export default function FormOthers({
  benefitItems,
  gradeItems,
}: {
  benefitItems: object[];
  gradeItems: object[];
}) {
  const formik: any = useFormikContext();

  const benefitCopy = [...benefitItems];
  const handleFindContent = (value: number) => {
    const benefit: any = benefitCopy.find((item: any) => {
      return item.value === value;
    });
    if (!!benefit) {
      return benefit.content;
    }
    return "";
  };
  const handleDeleteItemSelect = (value: number) => {
    const fieldBenefit = formik.values.benefits;

    const setFieldBenefit = fieldBenefit.filter((item: number) => {
      return item !== value;
    });

    return formik.setFieldValue("benefits", setFieldBenefit);
  };

  return (
    <Box
      sx={{
        margin: "0 20px 20px",
        minHeight: "250px",
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
              <CustomSelectField name="grade_id" menuItems={gradeItems} />
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
                renderValue={(selected: any) => {
                  return (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value: number) => {
                        if (!!value) {
                          return (
                            <Chip
                              key={value}
                              label={handleFindContent(value)}
                              onDelete={() => {
                                handleDeleteItemSelect(value);
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
  );
}
