import * as React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";
import { InputAdornment, TextField } from "@mui/material";
import { useFormikContext } from "formik";

import { IconDate, IconDown } from "../icons/icons";
import { format } from "date-fns";

export default function CustomDateField({
  name,
  sx,
}: {
  name?: string;
  sx?: any;
}) {
  const [date, setDate] = React.useState(null);
  const formik: any = useFormikContext();

  return (
    <>
      <DatePicker
        selected={date}
        onChange={(val: any) => {
          setDate(val);
          formik.setFieldValue(
            String(name),
            val ? format(val, "yyyy-MM-dd") : ""
          );
        }}
        dateFormat={"yyyy-MM-dd"}
        isClearable
        showYearDropdown
        dropdownMode="select"
        value={formik.values[name || ""]}
        customInput={
          <Field
            name={name}
            as={TextField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconDate />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconDown
                    style={{
                      rotate: "270deg",
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-input": {
                padding: "12px 0",
              },
              ...sx,
            }}
          />
        }
      />
    </>
  );
}
