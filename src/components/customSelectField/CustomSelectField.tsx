import { MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Field } from "formik";
import { IconDown } from "../icons/icons";
import { useFormikContext } from "formik";

export default function CustomSelectField({
  name,
  menuItems,
  sx,
  multiple,
  renderValue,
  placeholder,
}: {
  name: string;
  menuItems: object[];
  sx?: any;
  placeholder?: string;
  multiple?: boolean;
  renderValue?: any;
}) {
  const formik: any = useFormikContext();
  return (
    <>
      <Field
        fullWidth
        displayEmpty
        name={name}
        id={name}
        as={Select}
        multiple={multiple}
        renderValue={renderValue}
        
        onChange={(e: SelectChangeEvent) => {
          formik.setFieldValue(name, e.target.value);
        }}
        value={formik.values[name]}
        IconComponent={(props: any) => (
          <IconDown
            className={`material-icons ${props.className}`}
            style={{
              marginRight: "3px",
              rotate: "270deg",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}
          />
        )}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
          },
          transformOrigin: {
            vertical: "top",
          },
          PaperProps: {
            sx: {
              maxHeight: "350px",
              padding: "0 10px",
              marginTop: "2px",
              boxShadow: "none",
              border: "1px solid rgb(223, 227, 230)",

              "& .MuiMenuItem-root": {
                marginTop: "2px",
                borderRadius: "6px",
              },

              "& .Mui-selected": {
                backgroundColor: "rgb(233, 249, 238) !important",
                color: "rgb(48, 164, 108)",
              },

              "& .MuiMenuItem-root:hover": {
                color: "rgb(48, 164, 108)",
                backgroundColor: "rgb(178 194 206 / 8%) !important",
                cursor: "pointer !important",
              },
            },
          },
          
        }}
        sx={sx}
      >

        {menuItems.map((item: any, index) => (
          <MenuItem value={item.value} key={index}>
            {item.content}
          </MenuItem>
        ))}
      </Field>
    </>
  );
}
