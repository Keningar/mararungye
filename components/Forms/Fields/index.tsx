import React from "react";
import { useField, FieldHookConfig } from "formik";

import InputUnstyled, { InputUnstyledOwnProps } from "@mui/base/InputUnstyled";
import SelectUnstyled, {
  SelectUnstyledOwnProps,
} from "@mui/base/SelectUnstyled";

import OptionUnstyled from "@mui/base/OptionUnstyled";
export { default as SelectFieldOption } from "@mui/base/OptionUnstyled";

// React 19 strict JSX types: @mui/base v5 ref-forwarding components
const _InputUnstyled: any = InputUnstyled;
const _SelectUnstyled: any = SelectUnstyled;
const _OptionUnstyled: any = OptionUnstyled;

type FieldProps = FieldHookConfig<any> & {
  label: string;
};

type TextFieldProps = FieldProps & InputUnstyledOwnProps;

export const TextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <_InputUnstyled {...field} {...(props as any)} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};

type SelectFieldProps = FieldProps & SelectUnstyledOwnProps<{}>;

export const SelectField = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<SelectFieldProps>
>(function SelectField({ label, children, ...props }, ref) {
  const [field, meta] = useField(props);

  console.log(field);

  return (
    <>
      <label>{label}</label>
      <_SelectUnstyled
        ref={ref}
        componentsProps={{ root: { className: "h-6" } }}
      >
        <_OptionUnstyled value='1'>1</_OptionUnstyled>
        <_OptionUnstyled value='2'>2</_OptionUnstyled>
        <_OptionUnstyled value='3'>3</_OptionUnstyled>
      </_SelectUnstyled>
      <_SelectUnstyled {...field} {...(props as any)}>
        {children}
      </_SelectUnstyled>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
});
