import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface CustomFormControlProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
}

export const CustomFormControl: FC<CustomFormControlProps> = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
}) => {
  return (
    <FormControl id="email" mb="2">
      <FormLabel>{label}</FormLabel>
      <Input
        focusBorderColor="green.500"
        rounded="none"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
};