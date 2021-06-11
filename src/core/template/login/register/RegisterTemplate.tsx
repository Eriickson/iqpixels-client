import React from "react";

import { Box, Divider, Text } from "@chakra-ui/react";
import { RegisterForm } from "./RegisterForm";

import { SignupFormOnSubmit } from "@/validations";

export const RegisterTemplate = () => {
  async function onSubmit(values: SignupFormOnSubmit) {
    console.log(values);
  }
  return (
    <Box
      bg="green.100"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
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
        <RegisterForm onSubmit={onSubmit} />
      </Box>
    </Box>
  );
};
