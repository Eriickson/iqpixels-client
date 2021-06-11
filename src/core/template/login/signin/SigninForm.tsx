import React, { FC } from "react";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";

import Link from "next/link";

import { useForm } from "react-hook-form";

// My Elements
import { SignInFormOnSubmit, signinFormResolver } from "@/validations";

// My Components
import { CustomFormControl } from "@/components";

interface SigninFormProps {
  onSubmit(values: SignInFormOnSubmit): Promise<void>;
}

export const SigninForm: FC<SigninFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: signinFormResolver });

  console.log();

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={1} spacingX={4} mb="4">
          <CustomFormControl
            label="Correo Electrónico"
            name="email"
            error={errors}
            register={register}
          />
          <CustomFormControl
            label="Contraseña"
            name="password"
            error={errors}
            register={register}
          />
        </SimpleGrid>
        <Button width="full" colorScheme="green" rounded="none" mb="2" type="submit">
          Signin
        </Button>
        <Link href="/login/register">
          <Button width="full" colorScheme="blue" variant="ghost" rounded="none">
            Register
          </Button>
        </Link>
      </form>
    </Box>
  );
};
