import React from "react";

// NextJS
import { NextPage } from "next";

import { Box, Divider, Text, Button, SimpleGrid } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { CustomFormControl } from "@/components";

import Link from "next/link";

const RegisterPage: NextPage = () => {
  const { register, handleSubmit } = useForm();

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <Box bg="green.100" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p="8" shadow="md" maxWidth="xl" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="none">
            Regístrate
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="medium">
            Crea tu cuenta.
          </Text>
        </Box>
        <Divider my="3" />
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={2} spacingX={4} mb="4">
              <CustomFormControl label="Nombre" name="name" register={register} />
              <CustomFormControl label="Apellido" name="lastname" register={register} />
              <CustomFormControl
                label="Nacimiento"
                name="birthday"
                type="date"
                register={register}
              />
              <CustomFormControl
                label="Correo electrónico"
                name="email"
                type="email"
                register={register}
              />
              <CustomFormControl
                label="Contraseña"
                name="password"
                type="password"
                register={register}
              />
              <CustomFormControl
                label="Confirmar contraseña"
                name="confirmPassword"
                type="password"
                register={register}
              />
            </SimpleGrid>
            <Button width="full" colorScheme="green" rounded="none" mb="2" type="submit">
              Signin
            </Button>
            <Link href="/login/signin">
              <Button width="full" colorScheme="blue" variant="ghost" rounded="none">
                Inicia Sesión
              </Button>
            </Link>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
