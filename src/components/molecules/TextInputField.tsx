import { FormHelperText } from "@mui/material";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

//type
type Props = {
  id: string;
  label: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  helperText?: string;
};

export default function TextInputField({
  id,
  label,
  error,
  required,
  disabled,
  placeHolder,
  helperText
}: Props) {
  return (
    <>
      <Label id={id} label={label} error={error}></Label>
      <Input
        id={id}
        error={error}
        required={required}
        disabled={disabled}
        placeHolder={placeHolder}
      />
      <FormHelperText error={error} children={helperText}/>
    </>
  );
}
