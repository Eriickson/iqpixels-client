import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister, DeepMap, FieldValues, FieldError } from "react-hook-form";

interface CustomFormControlProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
  defaultValue?: string;
  error?: DeepMap<FieldValues, FieldError>;
}

export const CustomFormControl: FC<CustomFormControlProps> = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
  defaultValue,
  error,
}) => {
  console.log();

  return (
    <FormControl id="email" mb="2">
      <FormLabel>{label}</FormLabel>
      <Input
        focusBorderColor="green.500"
        rounded="none"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
      {error && error[name] && <FormHelperText color="red">{error[name].message}</FormHelperText>}
    </FormControl>
  );
};
