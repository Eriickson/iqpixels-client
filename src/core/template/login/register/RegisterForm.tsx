import React, { FC } from "react";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";

import { SignupFormOnSubmit, signupFormResolver } from "@/validations";

import { CustomFormControl } from "@/components";

interface RegisterFormProps {
  onSubmit: (values: SignupFormOnSubmit) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: signupFormResolver });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={2} spacingX={4} mb="4">
          <CustomFormControl
            label="Nombre"
            name="name"
            register={register}
            error={errors}
          />
          <CustomFormControl
            label="Apellido"
            name="lastname"
            register={register}
            error={errors}
          />
          <CustomFormControl
            label="Nacimiento"
            name="birthday"
            type="date"
            register={register}
            error={errors}
          />
          <CustomFormControl
            label="Correo electrónico"
            name="email"
            type="email"
            register={register}
            error={errors}
          />
          <CustomFormControl
            label="Contraseña"
            name="password"
            type="password"
            register={register}
            error={errors}
          />
          <CustomFormControl
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors}
          />
        </SimpleGrid>
        <Button
          width="full"
          colorScheme="green"
          rounded="none"
          mb="2"
          type="submit"
        >
          Signin
        </Button>
        <Link href="/login/signin">
          <Button
            width="full"
            colorScheme="blue"
            variant="ghost"
            rounded="none"
          >
            Inicia Sesión
          </Button>
        </Link>
      </form>
    </Box>
  );
};
