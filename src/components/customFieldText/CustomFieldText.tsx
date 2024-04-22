import { TextField } from "@mui/material";
import { Field } from "formik";

export default function CustomFieldText(props?: any) {
  const { as, ...custom } = props;

  return (
    <>
      <Field as={as ? as : TextField} {...custom} />
    </>
  );
}
