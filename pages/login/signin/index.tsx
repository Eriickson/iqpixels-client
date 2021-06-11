import React from "react";
import { NextPage } from "next";
import { Box, Divider, Text, Button, SimpleGrid } from "@chakra-ui/react";

import Link from "next/link";

import { useForm } from "react-hook-form";

// My Components
import { CustomFormControl } from "@/components";

const SignInPage: NextPage = () => {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Box bg="green.100" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p="8" shadow="md" maxWidth="sm" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="none">
            Iniciar Sesión
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="medium">
            Ingresa a nuestra página web.
          </Text>
        </Box>
        <Divider my="3" />
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={1} spacingX={4} mb="4">
              <CustomFormControl label="Correo Electrónico" name="name" register={register} />
              <CustomFormControl label="Contraseña" name="password" register={register} />
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
      </Box>
    </Box>
  );
};

export default SignInPage;
