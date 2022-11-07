import { TextField } from "@mui/material";

export const Input = ({
  meta: { touched, error },
  input: inputProps,
  ...props
}) => (
  <TextField
      error={!!(touched && error)}
      helperText={touched && error}
      {...inputProps}
      {...props}
      fullWidth
  />
);
